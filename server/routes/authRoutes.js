const express = require('express')
const router = express.Router()
const auth = require("../middleware/authMiddleware")
const { signup, login } = require('../controllers/userController.js')
const User = require("../models/User")
const Note = require("../models/Note")

router.post("/auth/signup", signup)
router.post("/auth/login", login)

router.get("/profile", auth, async (req, res) => {
    try {
        const userId = req.user.id

        // user find
        const user = await User.findById(userId).select("-password")

        // notes count
        const notesCount = await Note.countDocuments({ user: userId })

        res.json({
            user,
            notesCount
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = router