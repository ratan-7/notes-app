function NoteCard({ note, onDelete, onEdit }) {
    return (
        <div className="bg-gray-800 border border-gray-700 p-5 rounded-2xl 
                    shadow-lg hover:shadow-2xl transition duration-300 
                    flex justify-between items-start">

            {/* LEFT CONTENT */}
            <div>
                <h2 className="text-lg font-semibold text-white mb-1">
                    {note.title}
                </h2>
                <p className="text-gray-400 text-sm">
                    {note.content}
                </p>
            </div>

            {/* RIGHT BUTTONS */}
            <div className="flex gap-2">

                {/* Edit */}
                <button
                    onClick={() => onEdit(note)}
                    className="px-3 py-1 rounded-lg text-sm font-medium 
                     bg-gradient-to-r from-yellow-400 to-orange-500 
                     text-white hover:scale-105 transition"
                >
                    Edit
                </button>

                {/* Delete */}
                <button
                    onClick={() => onDelete(note._id)}
                    className="px-3 py-1 rounded-lg text-sm font-medium 
                     bg-gradient-to-r from-red-500 to-pink-500 
                     text-white hover:scale-105 transition"
                >
                    Delete
                </button>

            </div>

        </div>
    )
}

export default NoteCard