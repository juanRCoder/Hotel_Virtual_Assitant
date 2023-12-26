import Mesas from "../../databases/Schema/mesasSchema.js";
import Cliente from "../../databases/Schema/clienteSchema.js";
import ReservaRestaurant from "../../databases/Schema/reservaRestaurantSchema.js";

export const getMesas = async (req, res) => {
  try {
    // Obtener todas las mesas de la colección
    const findMesas = await Mesas.find({});

    // Retornar los datos obtenidos de la colección
    res.status(200).json(findMesas);
  } catch (error) {
    console.error("Error al obtener las mesas:", error);
    res
      .status(500)
      .json({ error: "Error al procesar la solicitud del servicio" });
  }
};

export const postReserva = async (req, res) => {
  try {
    const { reserva, cantidad, fecha, hora, minutes } = req.body;
    const clienteId = req.params.id;

    const mesaEncontrada = await Mesas.findOne({ tipo_mesa: reserva });
    if (!mesaEncontrada) {
      return res.status(404).json({ error: "Mesa no encontrada" });
    }

    //crear nueva reserva con los datos ingresados
    const newReserva = new ReservaRestaurant({
      id_cliente: clienteId,
      id_mesa: mesaEncontrada._id,
      cantidad,
      fecha,
      hora,
      minutes,
    });
    //cambiar el estado a mesa ocupada (de false a true)
    mesaEncontrada.estado = true;
    await newReserva.save();
    //enviar el id al front
    const idReserva = newReserva._id;

    res.status(201).json(idReserva);
  } catch (error) {
    console.error("Error al crear el servicio:", error);
    res
      .status(500)
      .json({ error: "Error al procesar la solicitud del servicio" });
  }
};

export const getReserva = async (req, res) => {
  try {
    const reservaId = req.params.idReserva;

    // Buscar reserva en la base de datos
    const ReservaEncontrada = await ReservaRestaurant.findById(reservaId);
    if (!ReservaEncontrada) {
      throw new Error("No se encontró la reserva con el ID proporcionado");
    }

    // Buscar al cliente asociado a la reserva en la base de datos
    const clienteAsociado = await Cliente.findById(
      ReservaEncontrada.id_cliente
    );
    if (!clienteAsociado) {
      throw new Error("No se encontró un cliente asociado a la reserva");
    }

    // Buscar los datos de la mesa asociada a la reserva a travez del id
    const mesaAsociada = await Mesas.findById(ReservaEncontrada.id_mesa);
    if (!mesaAsociada) {
      throw new Error("No se encontró un tipo de mesa asociado a la reserva");
    }

    // Formatear la fecha al formato(YYYY-MM-DD)
    const formattedDate = new Date(ReservaEncontrada.fecha)
      .toISOString()
      .split("T")[0];

    // Estructurar los datos que deseas enviar al frontend
    const datosReserva = {
      Cliente: {
        id: clienteAsociado._id,
        nombres: clienteAsociado.nombres,
        apellidos: clienteAsociado.apellidos,
        codigo: clienteAsociado.codigo,
        habitacion: clienteAsociado.habitacion,
      },
      ReservaRestaurant: {
        cantidad: ReservaEncontrada.cantidad,
        fecha: formattedDate, 
        hora: ReservaEncontrada.hora,
        minutes: ReservaEncontrada.minutes,
        updated_at: ReservaEncontrada.updated_at,
        tipo_mesa: mesaAsociada.tipo_mesa,
      },
    };

    // Enviar los datos al frontend como respuesta en formato JSON
    res.status(200).json(datosReserva);
  } catch (error) {
    console.error("Error al obtener el servicio:", error);
    res
      .status(500)
      .json({ error: "Error al procesar la solicitud del servicio" });
  }
};
