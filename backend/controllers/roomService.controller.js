import Menu from "../../databases/Schema/menuSchema.js";
import Bebidas from "../../databases/Schema/bebidasSchema.js";
import Cliente from "../../databases/Schema/clienteSchema.js";
import RoomService from "../../databases/Schema/roomServiceSchema.js";

export const getMenu = async (req, res) => {
  try {
    // Obtener todas los campos de la coleccion "menus"
    const findMenus = await Menu.find({});

    // Retornar los datos obtenidos de la colección
    res.status(200).json(findMenus);
  } catch (error) {
    console.error("Error al obtener las mesas:", error);
    res
      .status(500)
      .json({ error: "Error al procesar la solicitud del servicio" });
  }
};
export const getBebidas = async (req, res) => {
  try {
    // Obtener todas los campos de la coleccion "bebidas"
    const findBebidas = await Bebidas.find({});

    // Retornar los datos obtenidos de la colección
    res.status(200).json(findBebidas);
  } catch (error) {
    console.error("Error al obtener las mesas:", error);
    res
      .status(500)
      .json({ error: "Error al procesar la solicitud del servicio" });
  }
};

export const postRoomService = async (req, res) => {
  try {
    // Datos ingresados por el front-end
    const {
      bebidaOption,
      menuOption,
      cant_beb,
      cant_menu,
      otros_detalles,
      hora,
      minutes,
    } = req.body;
    const clienteId = req.params.id;
    
    const CBebida = await Bebidas.findOne({ nombres: bebidaOption });
    const CMenu = await Menu.findOne({ nombres: menuOption });

    if (!CMenu || !CBebida) {
      return res.status(404).json({ error: "Bebida o menú no encontrados" });
    }

    // Reducir el stock de bebidas
    CBebida.cantidad -= cant_beb;
    await CBebida.save();

    // Actualizar el estado si la cantidad llega a cero
    if (CBebida.cantidad === 0) {
      CBebida.estado = false;
      await CBebida.save();
    }

    // Crear el nuevo RoomService
    const newRoomService = new RoomService({
      id_cliente: clienteId,
      id_bebida: CBebida._id,
      id_menu: CMenu._id,
      cant_beb,
      cant_menu,
      otros_detalles,
      hora,
      minutes,
    });

    const savedRoomService = await newRoomService.save();
    res.status(201).json(savedRoomService._id);
  } catch (e) {
    console.error("Error al crear el roomService:", e);
    res
      .status(500)
      .json({ error: "Error al procesar la solicitud de roomService" });
  }
};


//EXTRAER LOS DATOS DEL ROOMSERVICE - CLIENTE - MENU Y BEBIDA
export const getRoomService = async (req, res) => {
  try {
    const roomServiceId = req.params.idRoomService;

    // Buscar roomservice en la base de datos
    const RoomServiceFinded = await RoomService.findById(roomServiceId);
    if (!RoomServiceFinded) {
      throw new Error("No se encontró la reserva con el ID proporcionado");
    }

    //Buscar al cliente asociado a la reserva en la base de datos
    const clienteAsociado = await Cliente.findById(RoomServiceFinded.id_cliente);
    if (!clienteAsociado) {
      throw new Error("No se encontró un cliente asociado al roomService");
    }

    // Buscar los datos del menu asociado con el roomService
    const MenuFinded = await Menu.findById(RoomServiceFinded.id_menu);
    const BebidaFinded = await Bebidas.findById(RoomServiceFinded.id_bebida);
    if (!MenuFinded || !BebidaFinded) {
      throw new Error("Menu o bebida no encontrado.");
    }

    // Estructurar los datos que deseas enviar al frontend
    const dataRoomService = {
      Cliente: {
        id: clienteAsociado._id,
        nombres: clienteAsociado.nombres,
        apellidos: clienteAsociado.apellidos,
        habitacion: clienteAsociado.habitacion,
      },
      RoomService: {
        comida: MenuFinded.nombres,
        cant_comida: RoomServiceFinded.cant_menu,
        bebida: BebidaFinded.nombres,
        cant_bebida: RoomServiceFinded.cant_beb,
        detalles: RoomServiceFinded.otros_detalles,
        hora: RoomServiceFinded.hora,
        minutes: RoomServiceFinded.minutes,
        updated_at: RoomServiceFinded.updated_at,
      },
    };

    // Enviar los datos al frontend como respuesta en formato JSON
    res.status(200).json(dataRoomService);
  } catch (error) {
    console.error("Error al obtener el servicio:", error);
    res
      .status(500)
      .json({ error: "Error al procesar la solicitud del servicio" });
  }
};
