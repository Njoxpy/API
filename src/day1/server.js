// import libraries
const express = require("express");
require("dotenv").config()

// create express instance
const app = express();

// import files
const connectDb = require("./config/DB")

// imort routes
const userRoutes = require("./routes/userRoutes")

app.use(express.json())
app.use(express.urlencoded({ extended: true })) // optional


// create server
app.get("/api/v1", (req, res) => {
    res.json("Day 1 learniung express.js")
})


// register user routes
app.use("/api/v1/users", userRoutes)

// STore port
const PORT = process.env.PORT || 4000
console.log("The running port is at: ", PORT)
console.log("The db name: ", process.env.MONGO_URI)

// listen for request for port
app.listen(PORT, () => {
    console.log(`Listening at: http://localhost:${PORT}/`);
    connectDb()
})