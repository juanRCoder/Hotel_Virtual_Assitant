import mongoose from 'mongoose';

const MesasSchema = new mongoose.Schema({
    id: Number,
    cantidad_sillas: Number,
    estado: Boolean
});

const Mesas = mongoose.Model('Mesas', MesasSchema);

export default Mesas;