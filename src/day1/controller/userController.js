// import model
const UserModel = require("../models/userModel");

// create
const createUser = async (req, res) => {
    try {
        const { name, age, sex, bio } = req.body;

        // check info
        if (!name || !age || !sex || !bio) {
            return res.status(400).json({ message: "Name, age, sex and bio are required" });
        }

        const newUser = await UserModel.create({ name, age, sex, bio });

        res.status(201).json({ message: "User created", newUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find();

        if(users.length === 0){
            return res.status(404).json({message: "No user found."})
        }

        res.status(200).json(users)
    } catch (error) {
        es.status(500).json({ message: error.message });
    }
}

module.exports = {
    createUser,
    getUsers
}
