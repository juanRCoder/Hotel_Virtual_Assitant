import Cliente from "../../databases/Schema/clienteSchema.js";

export const ClientAutentication = async (req, res, next) => {
  const { codigo } = req.body;

  try {
    const client = await Cliente.findOne({ codigo });
    if (client) {
      next();
    } else {
      res.status(401).json({ message: "Acceso denegado" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
};
