import express from "express";
import {
  postServicio,
  getServicio,
} from "../controllers/servicios.controller.js";

const servicioRouter = express.Router();

servicioRouter.post("/enviarServicio/:id", postServicio);
servicioRouter.get("/extraerServicio/:idService", getServicio);

export { servicioRouter };
