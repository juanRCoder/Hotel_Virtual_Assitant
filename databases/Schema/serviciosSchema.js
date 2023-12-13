import mongoose from 'mongoose';

const serviciosSchema = new mongoose.Schema({
    id_cliente: Number,
    nombreServicio: String,
    descripcion: String,
    horario: Date
})

const Servicios = mongoose.model('Servicios', serviciosSchema);

export default Servicios;