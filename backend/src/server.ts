// Importaciones:
import express from "express"; // ESM Ecmascript module
import router from "./router";
import "dotenv/config";
import { connectDB } from "./config/db";

// Instancia del servidor:
const app = express();

// Llamando a la funcion de la conexion a la BD:
connectDB();

// Leer datos de formularios:
app.use(express.json());

// Usa el router para todas las rutas
app.use("/", router);

export default app

/*AQUI SE CONFIGURA LA BASE DE DATOS, CORS ENTRE OTROS */