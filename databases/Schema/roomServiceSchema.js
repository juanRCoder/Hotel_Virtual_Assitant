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
  cant_beb: Number,
  cant_menu: Number,
  otros_detalles: String,
  fecha: Date,
  hora: String,
  minutes: String,
  updated_at: {
    type: Date,
    default: Date.now
}
});

const RoomService = mongoose.model('RoomService', roomServiceSchema);

export default RoomService;