import mongoose from 'mongoose';


const roomServiceSchema = new mongoose.Schema({
  id_cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente'
  },
  id_bebida: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bebidas'
  },
  id_menu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Menu'
  },
  fecha: Date,
  horario: String
});

const RoomService = mongoose.model('RoomService', roomServiceSchema);

export default RoomService;