import express from "express";
import { postServicio} from "../controllers/servicios.controller.js";

const servicioRouter = express.Router();

// Api post = verifica pide un servicio o no
servicioRouter.post("/dashboard/servicios/enviarServicio", postServicio);

export { servicioRouter };
