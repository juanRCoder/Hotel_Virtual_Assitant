import Cliente from "../../databases/Schema/clienteSchema.js";
import Tecnico from "../../databases/Schema/tecnicoSchema.js";

export const postTecnico = async (req, res) => {
  try {
    const { problema, descripcion, hora, minutes } = req.body;
    const clienteId = req.params.id;

    // Validar la existencia y validez del ID del cliente
    if (!clienteId) {
      return res.status(400).json({ error: "ID del cliente no proporcionado" });
    }

    //crear nuevo servicio tecnico.
    const newServicoTecnico = new Tecnico({
      id_cliente: clienteId,
      problema,
      descripcion,
      hora,
      minutes,
    });

    await newServicoTecnico.save();

    const serviceTecnicoId = newServicoTecnico._id;
    res.status(201).json(serviceTecnicoId);
  } catch (e) {
    console.error("Error al crear el servicio tecnico:", e);
    res
      .status(500)
      .json({ error: "Error al procesar la solicitud del servicio" });
  }
};

//EXTRAER SERVICIOS TECNICOS ASOCIADO CON EL CLIENTE
export const getTecnico = async (req, res) => {
  try {
    const tecnicoId = req.params.idServiceTec;

    const servicioTecnico = await Tecnico.findById(tecnicoId);
    if (!servicioTecnico) {
      return res.status(404).json({
        message: "No se encontró el servicio tecnico con el ID proporcionado",
      });
    }

    const clienteAsociado = await Cliente.findById(servicioTecnico.id_cliente);
    if (!clienteAsociado) {
      return res.status(404).json({
        message: "No se encontró un cliente asociado al servicio tecnico",
      });
    }

    const dataServiceTecnico = {
      Cliente: {
        id: clienteAsociado._id,
        nombres: clienteAsociado.nombres,
        apellidos: clienteAsociado.apellidos,
        habitacion: clienteAsociado.habitacion,
      },
      Tecnico: {
        problema: servicioTecnico.problema,
        descripcion: servicioTecnico.descripcion,
        hora: servicioTecnico.hora,
        minutes: servicioTecnico.minutes,
        created_at: servicioTecnico.created_at,
      },
    };

    res.status(200).json(dataServiceTecnico);
  } catch (error) {
    console.error("Error al obtener el servicio tecnico:", error);
    res
      .status(500)
      .json({ error: "Error al procesar la solicitud del servicio" });
  }
};
