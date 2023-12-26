import mongoose from 'mongoose';

const reservaSchema = new mongoose.Schema({
    id_cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    id_mesa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mesas'
    },
    cantidad: Number,
    fecha: Date,
    hora: String,
    minutes: String,
    updated_at: {
        type: Date,
        default: Date.now
    }
})

const ReservaRestaurant = mongoose.model("ReservaRestaurant", reservaSchema);

export default ReservaRestaurant;