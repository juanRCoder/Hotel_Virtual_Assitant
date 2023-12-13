import mongoose from 'mongoose';

const reservaSchema = new mongoose.Schema({
    id_cliente: Number,
    id_mesa: Number,
    cantidad: Number,
    fecha: String,
    horario: String,
})

const Reserva_restaurant = mongoose.model("Reserva Restaurant", reservaSchema);

export default Reserva_restaurant;