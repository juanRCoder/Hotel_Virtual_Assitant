import express from "express";
import { postTecnico, getTecnico } from "../controllers/tecnico.controller.js";

const tecnicoRouter = express.Router();

tecnicoRouter.post("/enviarServiciosTec/:id", postTecnico);
tecnicoRouter.get("/extraerServiciosTec/:idServiceTec", getTecnico);

export { tecnicoRouter };
