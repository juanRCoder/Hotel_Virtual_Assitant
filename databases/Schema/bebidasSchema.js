import mongoose from 'mongoose';

const bebidasSchema = new mongoose.Schema({
  nombres: String,
  estado: String,
  codigo: String,
});

const Bebidas = mongoose.model('Bebidas', bebidasSchema);

export default Bebidas;