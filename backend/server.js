import express from "express";
import { fileURLToPath } from "url";
import { dashboardRouter } from "./routers/dashboard.router.js";
import { servicioRouter } from "./routers/servicios.router.js";
import { faqRouter } from "./routers/faq.router.js";
import { tecnicoRouter } from "./routers/tecnico.router.js";
import bodyParser from "body-parser";
import connectDB from "../databases/database.js";
import path from "path";
import { ClientAutentication } from "./middlewares/client.middleware.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3004;

app.use(bodyParser.json());

// Servir archivos estaticos de la carpeta dist/
app.use(express.static(path.resolve(__dirname, "../dist")));

//Middleware
app.use("/dashboard", ClientAutentication);

//RUTAS
app.use(dashboardRouter);
app.use(servicioRouter);
app.use(faqRouter);
app.use(tecnicoRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Express server run: http://localhost:${PORT}`);
});

connectDB();
