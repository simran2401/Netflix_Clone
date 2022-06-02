const express = require('express')
const app = express()
const dotenv = require('dotenv')
const authRoute = require("./routes/auth")

dotenv.config()

const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connection successfully ..."))

app.use(express.json())
app.use("/api/auth", authRoute)

app.listen(8000, () => {
    console.log("Express is running....")
})