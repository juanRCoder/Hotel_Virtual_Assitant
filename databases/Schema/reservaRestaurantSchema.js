import mongoose from 'mongoose';

const reservaSchema = new mongoose.Schema({
    id_cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    id_mesa: Number,
    cantidad: Number,
    fecha: Date,
    hora: String,
    minutes: String,
    updated_at: {
        type: Date,
        default: Date.now
    }
})

const Reserva_restaurant = mongoose.model("Reserva Restaurant", reservaSchema);

export default Reserva_restaurant;