import mongoose from 'mongoose';

//Connect to MondoDB
const url = 'mongodb://127.0.0.1/testaroo';

async function connectDB() {
    try {
        await mongoose.connect(url)
        console.log("connection has been made...");

    } catch (err) {
        console.log("Connection error: ", err)
    }
}

export default connectDB;