import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
  nombres: String,
  estado: String,
  codigo: String,
});

const Menu = mongoose.model('Menu', menuSchema);

export default Menu;
