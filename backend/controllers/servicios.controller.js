import Cliente from "../../databases/Schema/clienteSchema.js";
import Servicios from "../../databases/Schema/serviciosSchema.js";

//CREA UNA NUEVA SOLICITUD EN LA COLLECION SERVICIO
export const postServicio = async (req, res) => {
  try {
    const { nombreServicio, descripcion, fecha, horario, codigoCliente } =
      req.body;

    // Buscar al cliente usando el código proporcionado
    const clienteAsociado = await Cliente.findOne({ codigo: codigoCliente });

    if (!clienteAsociado) {
      return res.status(404).json({
        message: "No se encontró un cliente asociado al código proporcionado",
      });
    }

    // Crear un nuevo servicio asociado al cliente encontrado
    const nuevoServicio = new Servicios({
      id_cliente: clienteAsociado._id,
      nombreServicio,
      descripcion,
      fecha,
      horario,
    });

    await nuevoServicio.save();

    // Datos a enviar al frontend
    const datosClienteServicio = {
      Cliente: {
        nombres: clienteAsociado.nombres,
        apellido: clienteAsociado.apellidos,
        codigo: clienteAsociado.codigo,
        habitacion: clienteAsociado.habitacion,
      },
      Servicios: {
        nombreServicio,
        descripcion,
        fecha,
        horario,
      },
    };
    res
      .status(201)
      .json({ message: "Servicio creado y asociado al cliente correctamente" });
  } catch (error) {
    console.error("Error al crear el servicio:", error);
    res
      .status(500)
      .json({ error: "Error al procesar la solicitud del servicio" });
  }
};
