import React, { useEffect, useState } from "react"
import NoteCard from "../components/NoteCard"
import Navbar from "../components/Navbar"
import API from "../services/api"

const Notes = () => {
    const [notes, setNotes] = useState([])
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [editingId, setEditingId] = useState(null)

    const fetchNotes = async () => {
        try {
            const res = await API.get("/notes")
            setNotes(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchNotes()
    }, [])

    const addNote = async () => {
        if (!title || !content) return alert("Fill all fields")

        try {
            const res = await API.post("/notes", { title, content })
            console.log("Added:", res.data) // debug
            setNotes((prev) => [...prev, res.data])

            setTitle("")
            setContent("")
        } catch (error) {
            console.error(error)
        }
    }

    const deleteNote = async (id) => {
        try {
            await API.delete(`/notes/${id}`)
            setNotes((prev) => prev.filter((note) => note._id !== id))

        } catch (error) {
            console.error(error)
        }
    }
    const handleEdit = (note) => {
        setTitle(note.title)
        setContent(note.content)
        setEditingId(note._id)
    }

    const updateNote = async () => {
        try {
            const res = await API.put(`/notes/${editingId}`, {
                title,
                content
            })
            setNotes((prev) =>
                prev.map((note) =>
                    note._id === editingId ? res.data : note
                )
            )

            setTitle("")
            setContent("")
            setEditingId(null)

        } catch (error) {
            console.error(error)
        }
    }
    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.href = "/login"
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">

            {/* Navbar */}
            <Navbar onLogout={handleLogout} />

            {/* Main Container */}
            <div className="max-w-2xl mx-auto px-4 py-8">

                {/* ✨ Form */}
                <div className="bg-white/20 backdrop-blur-lg border border-white/30 p-5 rounded-2xl shadow-lg mb-6">

                    <h2 className="text-white font-semibold mb-3">
                        {editingId ? "✏️ Edit Note" : "✨ Add Note"}
                    </h2>

                    <input
                        className="w-full p-2 mb-3 rounded bg-white/30 text-white placeholder-gray-200 focus:outline-none"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <input
                        className="w-full p-2 mb-3 rounded bg-white/30 text-white placeholder-gray-200 focus:outline-none"
                        placeholder="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />

                    <button
                        onClick={editingId ? updateNote : addNote}
                        className={`w-full py-2 rounded text-white transition ${editingId
                            ? "bg-yellow-500 hover:bg-yellow-600"
                            : "bg-blue-500 hover:bg-blue-600"
                            }`}
                    >
                        {editingId ? "Update Note" : "Add Note"}
                    </button>
                </div>

                {/* 📝 Notes List (UNCHANGED COMPONENT) */}
                <div className="space-y-4">
                    {notes.length === 0 ? (
                        <p className="text-center text-white">No notes available</p>
                    ) : (
                        notes.map((note) => (
                            <NoteCard
                                key={note._id}
                                note={note}
                                onDelete={deleteNote}
                                onEdit={handleEdit}
                            />
                        ))
                    )}
                </div>

            </div>
        </div>
    )
}

export default Notes