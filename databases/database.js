import mongoose from 'mongoose';

//Connect to MondoDB
mongoose.connect('mongodb://127.0.0.1/testaroo');

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("connection has been made...");
}).on('error', function(error) {
    console.log("Connection error: ", error);
});

export default connection;