import React, { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import API from "../services/api"

const Profile = () => {
    const [user, setUser] = useState(null)
    const [notesCount, setNotesCount] = useState(0)
    const [loading, setLoading] = useState(true)

    // Fetch profile
    const fetchProfile = async () => {
        try {
            const res = await API.get("/auth/profile")

            console.log("PROFILE DATA:", res.data) // debug

            setUser(res.data.user)
            setNotesCount(res.data.notesCount)
        } catch (error) {
            console.error("Profile error:", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProfile()
    }, [])

    // Logout
    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.href = "/login"
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">

            {/* Navbar */}
            <Navbar />

            {/* Center Container */}
            <div className="flex justify-center items-center py-12 px-4">

                <div className="w-full max-w-md 
        bg-white/20 backdrop-blur-xl 
        border border-white/30 
        rounded-3xl shadow-2xl p-6 text-white">

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-center mb-6">
                        👤 Profile
                    </h2>

                    {loading ? (
                        <p className="text-center">Loading...</p>
                    ) : user ? (
                        <div className="space-y-4">

                            {/* Name */}
                            <div className="bg-white/30 rounded-xl p-3">
                                <p className="text-sm opacity-70">Name</p>
                                <p className="font-semibold text-lg">{user.name}</p>
                            </div>

                            {/* Email */}
                            <div className="bg-white/30 rounded-xl p-3">
                                <p className="text-sm opacity-70">Email</p>
                                <p className="font-semibold">{user.email}</p>
                            </div>

                            {/* Notes Count */}
                            <div className="bg-white/30 rounded-xl p-3">
                                <p className="text-sm opacity-70">Total Notes</p>
                                <p className="font-semibold">{notesCount}</p>
                            </div>

                            {/* Logout Button */}
                            <button
                                onClick={handleLogout}
                                className="w-full mt-4 py-2 rounded-xl 
                bg-gradient-to-r from-pink-500 to-blue-500 
                hover:scale-105 transition shadow-md"
                            >
                                Logout
                            </button>

                        </div>
                    ) : (
                        <p className="text-center text-red-200">
                            Failed to load profile
                        </p>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Profile