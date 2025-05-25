// import express and create router instane
const express = require("express")
const userRoutes = express.Router()

// imort controllers
const {
    createUser,
    getUsers, 
} = require("../controller/userController")

// create
userRoutes.post("/", createUser)

// read: all users, 
userRoutes.get("/", getUsers)

userRoutes.get("/:id", (req, res) => {
    res.json("Get user by id")
})

// update
userRoutes.patch("/:id", (req, res) => {
    res.json("Update user")
})

// delete
userRoutes.delete("/:id", (req, res) => {
    res.json("Delete user by id:")
})

module.exports = userRoutes