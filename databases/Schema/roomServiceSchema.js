import mongoose from 'mongoose';

const roomServiceSchema = new mongoose.Schema({
  id_cliente: Number,
  id_bebida: Number,
  id_menu: Number,
  fecha: String,
  horario: String
});

const RoomService = mongoose.model('RoomService', roomServiceSchema);

export default RoomService;