import Cliente from "../../databases/Schema/clienteSchema.js";

//VERIFICA EN LA BASE DE DATOS SI ESTA EL CLIENTE REGISTRADO
export const postRegistro = async (req, res) => {
  try {
    const { nombre, apellido, codigo } = req.body;

    const Registrado = await Cliente.findOne({
      nombres,
      apellidos,
      codigo,
    });

    if (!Registrado) {
      return res.status(404).json({ message: "Cliente no registrado" });
    }
    res.status(200).json({ message: "Cliente registrado" });
  } catch (e) {
    console.error("Error al guardar datos de MongoDB", e);
    res.status(500).json({ e: "Error al procesar los datos" });
  }
};

//CREA UN NUEVO DOCUMENTO EN LA COLLECION SERVICIO
export const postServicio = async (req, res) => {
  try {
    const { nombre, apellido, codigo } = req.body;
  } catch (e) {}
};
