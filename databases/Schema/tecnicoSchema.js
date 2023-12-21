import mongoose from 'mongoose'

const tecnicoSchema = new mongoose.Schema({
    id_cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    problema: String,
    descripcion: String,
    horario: String,
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Tecnico = mongoose.model('tecnico', tecnicoSchema);
export default Tecnico;