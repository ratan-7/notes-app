const express = require('express');
const app = express();
const connectDB = require('./config/db.js')
const notesRoutes = require('./routes/noteRoutes.js')
const authRoutes = require('./routes/authRoutes.js')
const cors = require("cors")

const port = 5000;
app.use(cors())
app.use(express.json())
connectDB();

app.use('/api/auth', authRoutes)
app.use('/api/notes', notesRoutes)
app.get('/', (req, res) => {
    res.send('Hello world');
})

app.listen(port, () => {
    console.log(`notes app is listening on port ${port}`);
})