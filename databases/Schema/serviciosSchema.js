import mongoose from 'mongoose';

const serviciosSchema = new mongoose.Schema({
    id_cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    nombreServicio: String,
    descripcion: String,
    fecha: Date,
    horario: String,
    updated_at: {
        type: Date,
        default: Date.now
    }
})

const Servicios = mongoose.model('Servicios', serviciosSchema);

export default Servicios;