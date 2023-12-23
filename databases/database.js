import mongoose from 'mongoose';

//Connect to MondoDB
const url = 'mongodb://127.0.0.1/testaroo';

async function connectDB() {
    try {
        await mongoose.connect(url)
        console.log("MongoDB connected!...");
    } catch (err) {
        console.log("MongoDB disconnected!", err)
    }
}

export default connectDB;