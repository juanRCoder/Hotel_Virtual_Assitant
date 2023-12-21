import Cliente from "../../databases/Schema/clienteSchema.js";
import Servicios from "../../databases/Schema/serviciosSchema.js";

//CREA UNA NUEVA SOLICITUD EN LA COLLECION SERVICIO
export const postServicio = async (req, res) => {
  try {
    const { nombreServicio, descripcion, horario } = req.body;
    const clienteId = req.params.id;

    // Crear un nuevo servicio asociado al cliente encontrado
    const nuevoServicio = new Servicios({
      id_cliente: clienteId,
      nombreServicio,
      descripcion,
      horario,
    });

    await nuevoServicio.save();

    const serviceId = nuevoServicio._id;

    res.status(201).json(serviceId);
  } catch (error) {
    console.error("Error al crear el servicio:", error);
    res
      .status(500)
      .json({ error: "Error al procesar la solicitud del servicio" });
  }
};

export const getServicio = async (req, res) => {
  try {
    const servicioId = req.params.idService;

    // Buscar el servicio en la base de datos basado en el servicioId
    const servicioEncontrado = await Servicios.findById(servicioId);

    if (!servicioEncontrado) {
      return res.status(404).json({
        message: "No se encontró el servicio con el ID proporcionado",
      });
    }

    // Buscar al cliente asociado al servicio usando el ID del cliente en el servicio encontrado
    const clienteAsociado = await Cliente.findById(
      servicioEncontrado.id_cliente
    );

    if (!clienteAsociado) {
      return res.status(404).json({
        message: "No se encontró un cliente asociado al servicio",
      });
    }

    // Estructurar los datos que deseas enviar al frontend
    const datosClienteServicio = {
      Cliente: {
        id: clienteAsociado._id,
        nombres: clienteAsociado.nombres,
        apellidos: clienteAsociado.apellidos,
        codigo: clienteAsociado.codigo,
        habitacion: clienteAsociado.habitacion,
      },
      Servicios: {
        nombreServicio: servicioEncontrado.nombreServicio,
        descripcion: servicioEncontrado.descripcion,
        horario: servicioEncontrado.horario,
        created_at: servicioEncontrado.created_at
      },
    };

    // Enviar los datos al frontend como respuesta en formato JSON
    res.status(200).json(datosClienteServicio);
  } catch (error) {
    console.error("Error al obtener el servicio:", error);
    res
      .status(500)
      .json({ error: "Error al procesar la solicitud del servicio" });
  }
};