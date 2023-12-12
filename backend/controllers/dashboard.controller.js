import Cliente from "../../databases/Schema/clienteSchema.js";

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
