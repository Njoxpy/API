// connect to mongodb
const mongoose = require("mongoose")

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/Day1";

const connectDb = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB connected sucessfully!");
        
    } catch (error) {
        console.error("There was an error when connecting to mongoDB", error.message);
        process.exit(-1)
    }
}

module.exports = connectDb;