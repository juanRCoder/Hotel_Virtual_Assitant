import mongoose from 'mongoose';

//Connect to MondoDB
const url = 'mongodb://127.0.0.1/testaroo';

async function connectDB() {
    try {
        console.log("connection has been made...");
        await mongoose.connect(url)
    } catch (err) {
        console.log("Connection error: ", err)
    }
}

export default connectDB;