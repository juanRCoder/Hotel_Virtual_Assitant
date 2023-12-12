import mongoose from 'mongoose';

const pregFrecSchema = new mongoose.Schema({
  nombre: String,
  preguntas: String,
});

const PreguntasFrecuentes = mongoose.model('PreguntasFrecuentes', pregFrecSchema);

export default PreguntasFrecuentes;