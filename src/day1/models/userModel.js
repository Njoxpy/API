const mongoose = require("mongoose")

// 1. Define the schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    }
}, {timestamps: true})

// 2. Create the model
const Users = mongoose.model("Users", userSchema)

// 3. Export it
module.exports = Users
