require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use("/auth", authRouter)

const start = async () => {
    try {
        const mongoURI = process.env.MONGO_URI || 'mongodb+srv://username:password@clustername.mongodb.net/database';
        await mongoose.connect(mongoURI);
        app.listen(PORT, () => console.log(`server start on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()