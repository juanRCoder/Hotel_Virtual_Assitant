import Cliente from "../../databases/Schema/clienteSchema.js";

//VERIFICA EN LA BASE DE DATOS SI ESTA EL CLIENTE REGISTRADO (CONEXION EXITOSA)
export const postRegistro = async (req, res) => {
  try {
    const { nombres, apellidos, codigo } = req.body;

    const Registrado = await Cliente.findOne({
      nombres,
      apellidos,
      codigo,
    });

    if (!Registrado) {
      return res.status(404).json({ message: "Cliente no registrado" });
    }
    const ClienteId = Registrado._id;

    res.status(200).json(ClienteId);
  } catch (e) {
    console.error("Error al guardar datos de MongoDB", e);
    res.status(500).json({ e: "Error al procesar los datos del cliente!" });
  }
};
