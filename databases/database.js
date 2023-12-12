const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    __id: Number,
    nombres: String,
    apellidos: String,
    habitacion: String,
    code: String,
});

const Cliente = mongoose.model('Cliente', clienteSchema);

const bebidasSchema = new mongoose.Schema({
    __id: Number,
    nombres: String,
    estado: String,
    code: String,
})

const Bebidas = mongoose.model('Bebidas', bebidasSchema);

const menuSchema = new mongoose.Schema({
    __id: Number,
    nombres: String,
    estado: String,
    code: String,
});

const Menu = new mongoose.model('Menu', menuSchema);

const preg_frecSchema = new mongoose.Schema({
    __id: Number,
    nombre: String,
    preguntas: String
})

const Preguntas_frecuentes = new mongoose.model('Preguntas frecuentes', preg_frecSchema)

const roomService = new mongoose.Schema({
    __id: Number,
    id_cliente: Number,
    id_bebida: Number,
    id_menu: Number
})

const RoomService = new mongoose.model('Room Services', roomService)


