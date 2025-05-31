// import model
const UserModel = require("../models/userModel");

// mongoose
const mongoose = require("mongoose");
// create
const createUser = async (req, res) => {
  try {
    const { name, age, sex, bio } = req.body;

    // check info
    if (!name || !age || !sex || !bio) {
      return res
        .status(400)
        .json({ message: "Name, age, sex and bio are required" });
    }

    const newUser = await UserModel.create({ name, age, sex, bio });

    res.status(201).json({ message: "User created", newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();

    if (users.length === 0) {
      return res.status(404).json({ message: "No user found." });
    }

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// implment get by name

// get user by an id
const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Fill out id" });
    }

    // mongoose
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid id" });
    }

    // find
    const exist = await UserModel.findOne({ _id: id });

    if (!exist) {
      return res.status(404).json({ message: "Not found!" });
    }

    res.status(200).json({ message: exist });
  } catch (error) {
    res.status(500).json({ message: "There was an error" });
    console.error({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, sex } = req.body;

    if (!id) {
      return res.status(400).json({ message: "Fill out id" });
    }

    // mongoose
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid id" });
    }

    const updatedUser = await UserModel.findOneAndUpdate(
      // filter
      { id }, // update
      { name, age, sex },
      // option
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json({ mesage: "Updated sucessfully", updatedUser });
  } catch (error) {
    res.status(500).json({ message: "There was an error" });
    console.error({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Fill out id" });
    }

    // mongoose
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid id" });
    }

    const deletedId = await UserModel.findByIdAndDelete(id);

    if (!deletedId) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json({ message: "Deleted sucessfilly", deletedId });
  } catch (error) {
    res.status(500).json({ message: "There was an error" });
    console.error({ error: error.message });
  }
};
module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
