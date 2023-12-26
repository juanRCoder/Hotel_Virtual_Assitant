import express from "express";
import { getMesas, postReserva, getReserva } from "../controllers/reserva.controllers.js";

const reservaRouter = express.Router();

// Api get = para obtener la informacion de las mesas
reservaRouter.get("/extraerMesas", getMesas);
reservaRouter.post("/enviarReserva/:id", postReserva);
reservaRouter.get("/extraerReserva/:idReserva", getReserva);

export { reservaRouter };