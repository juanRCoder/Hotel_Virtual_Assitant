import express from "express";
import { getMenu, getBebidas , postRoomService, getRoomService} from "../controllers/roomService.controller.js";

const roomServiceRouter = express.Router();

// Api para obtener la informacion de comidas y bebidas
roomServiceRouter.get("/extraerMenu", getMenu);
roomServiceRouter.get("/extraerBebidas", getBebidas);

roomServiceRouter.post("/enviarRoomService/:id", postRoomService);
roomServiceRouter.get("/extraerRoomService/:idRoomService", getRoomService);

export { roomServiceRouter };