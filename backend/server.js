import express from "express";
import { fileURLToPath } from "url";
import { dashboardRouter } from "./routers/dashboard.routers.js";
import bodyParser from "body-parser";
import connectDB from "../databases/database.js";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3004;

app.use(bodyParser.json());

// Servir archivos estaticos de la carpeta dist/
app.use(express.static(path.resolve(__dirname, "../dist")));

app.use(dashboardRouter);


app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});


connectDB();

app.listen(PORT, () => {
  console.log(`Express server run: http://localhost:${PORT}`);
});