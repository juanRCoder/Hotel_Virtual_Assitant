import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
  nombres: String,
  apellidos: String,
  habitacion: String,
  codigo: String,
});

const Cliente = mongoose.model('Cliente', clienteSchema);

export default Cliente;