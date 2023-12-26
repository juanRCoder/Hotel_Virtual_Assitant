import mongoose from 'mongoose';

const mesaSchema = new mongoose.Schema({
    tipoMesa: String,
    cantidadSillas: Number,
    estado: Boolean
});

const Mesas = mongoose.model('Mesas', mesaSchema);

export default Mesas;