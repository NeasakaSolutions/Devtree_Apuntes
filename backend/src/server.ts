// Importaciones:
import express from "express"; // ESM Ecmascript module
import router from "./router";

// Instancia del servidor:
const app = express();

// Usa el router para todas las rutas
app.use("/", router);

export default app

/*AQUI SE CONFIGURA LA BASE DE DATOS, CORS ENTRE OTROS */