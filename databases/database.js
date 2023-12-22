import mongoose  from 'mongoose';

//Connect to MondoDB
const url = 'mongodb://127.0.0.1/testaroo';

async function connectDB() {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        mongoose.connection.on('connected', () => {
            console.log("connection has been made...");
        });

        mongoose.connection.on('disconnected', () => {
            console.log('connection closed');
        });

        mongoose.connection.on('error', (error) => {
            console.error('connection error: ', error);
        });
        
    } catch (err) {
        console.log("Connection error: ", err)
    }
}

export default connectDB;