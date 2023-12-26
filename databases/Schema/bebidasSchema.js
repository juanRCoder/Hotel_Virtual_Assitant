import mongoose from 'mongoose';

const bebidasSchema = new mongoose.Schema({
  nombres: String,
  cantidad: Number,
  estado: Boolean,
  codigo: String,
});

const Bebidas = mongoose.model('Bebidas', bebidasSchema);

export default Bebidas;