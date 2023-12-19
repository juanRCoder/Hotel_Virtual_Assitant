import express from "express";
import { postRegistro} from "../controllers/dashboard.controller.js";

const dashboardRouter = express.Router();

// Api post = verifica si el cliente esta registrado o no
dashboardRouter.post("/enviarRegistro", postRegistro);

export { dashboardRouter };
