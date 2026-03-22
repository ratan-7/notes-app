const Note = require('../models/Note.js')

// Create Note
exports.createNote = async (req, res) => {
    const note = await Note.create({
        title: req.body.title,
        content: req.body.content,
        user: req.user.id // 🔥 user link
    })

    res.json(note)
}

// Get All Notes
exports.getNotes = async (req, res) => {
    const notes = await Note.find({ user: req.user.id }) // 🔥 filter
    res.json(notes)
}
// Delete Note
exports.deleteNote = async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.id)
        res.json({ message: "Note deleted" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Update Note
exports.updateNote = async (req, res) => {
    try {
        const note = await Note.findByIdAndUpdate(
            req.params.id,
            req.body,
            { returnDocument: "after" }
        )
        res.json(note)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// profile page
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password")

        const notesCount = await Note.countDocuments({
            user: req.user.id
        })

        res.json({
            user,
            notesCount
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}