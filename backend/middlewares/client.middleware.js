import Cliente from "../../databases/Schema/clienteSchema.js";

export const ClientAutentication = async (req, res, next) => {
  const { codigo } = req.body;

  try {
    const client = await Cliente.findOne({ codigo });
    if (client) {
      next();
    } else {
      res.redirect("/");
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
};
