import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
  nombres: String,
  estado: Boolean,
  codigo: String,
});

const Menu = mongoose.model('Menu', menuSchema);

export default Menu;
