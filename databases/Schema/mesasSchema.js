import mongoose from 'mongoose';

const MesasSchema = new mongoose.Schema({
    tipo_mesa: String,
    cantidad_sillas: Number,
    estado: Boolean
});

const Mesas = mongoose.Model('Mesas', MesasSchema);

export default Mesas;