import PreguntasFrecuentes from "../../databases/Schema/preguntasFrecuentasSchema.js";

export const getFAQ = async (req, res) => {
  try {
    const ClientId = req.params.id;
    const faqs = await PreguntasFrecuentes.find({});

    res.status(201).json({faqs, ClientId});
  } catch (e) {
    console.error("Error al obtener las FAQs:", error);
    res
      .status(500)
      .json({ error: "Error al procesar la solicitud del servicio" });
  }
};
