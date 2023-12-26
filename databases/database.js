import mongoose from 'mongoose';
    
//Connect to MondoDB
const url = 'mongodb://127.0.0.1:27017/testaroo';

async function connectDB() {
    try {
        await mongoose.connect(url)
        console.log("MongoDB connected!...");

        mongoose.connection.on('connected', () => {
            console.log('connection established..');
        });

        mongoose.connection.on('disconnected', () => {
            console.log('connection closed..');
        });

        mongoose.connection.on('error', (err) => {
            console.log('connection error: ', err);
        })
    } catch (err) {
        console.log("MongoDB disconnected!", err)
    }
}

export default connectDB;