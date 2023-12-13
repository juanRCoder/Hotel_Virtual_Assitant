import express from "express";
import { postRegistro , postServicio} from "../controllers/dashboard.controller.js";

const dashboardRouter = express.Router();

// Api post = verifica si el cliente esta registrado o no
dashboardRouter.post("/enviarRegistro", postRegistro);

// Api post = verifica pide un servicio o no
dashboardRouter.post("/dashboard/servicios/enviarServicio", postServicio);

export { dashboardRouter };
