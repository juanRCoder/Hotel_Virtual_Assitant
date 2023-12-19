import mongoose from 'mongoose';

const pregFrecSchema = new mongoose.Schema({
  pregunta: String,
  respuesta: String,
});

const PreguntasFrecuentes = mongoose.model('PreguntasFrecuentes', pregFrecSchema);

export default PreguntasFrecuentes;