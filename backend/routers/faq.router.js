import express from "express";
import { getFAQ } from "../controllers/faq.controller.js";

const faqRouter = express.Router();

// Api get = para obtener la informacion de FAQ
faqRouter.get("/extraerFAQ", getFAQ);

export { faqRouter };
