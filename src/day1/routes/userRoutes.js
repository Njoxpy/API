// import express and create router instane
const express = require("express");
const userRoutes = express.Router();

// imort controllers
const {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../controller/userController");

// create
userRoutes.post("/", createUser);

// read: all users,
userRoutes.get("/", getUsers);

// get by id
userRoutes.get("/:id", getUser);

// update
userRoutes.patch("/:id", updateUser);

// delete
userRoutes.delete("/:id", deleteUser);

module.exports = userRoutes;
