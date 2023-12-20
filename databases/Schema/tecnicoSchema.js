import mongoose from 'mongoose'

const tecnicoSchema = new mongoose.Schema({
    id_cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    problema: String,
    descripcion: String,
    fecha: Date,
    horario: String
});

const Tecnico = mongoose.model('tecnico', tecnicoSchema);
export default Tecnico;