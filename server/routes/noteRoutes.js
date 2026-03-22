const express = require("express")
const router = express.Router()
const {
    createNote,
    getNotes,
    deleteNote,
    updateNote

} = require("../controllers/noteController")
const auth = require("../middleware/authMiddleware.js")


router.post("/", auth, createNote)
router.get("/", auth, getNotes)
router.delete("/:id", auth, deleteNote)
router.put("/:id", auth, updateNote)



module.exports = router