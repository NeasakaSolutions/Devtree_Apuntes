// Importaciones:
import express from "express"; // ESM Ecmascript module

// Instancia del servidor:
const app = express();

// Routing:
app.get('/', (req, res) => {
    res.send("Hola mundo en express");
});

export default app

/*AQUI SE CONFIGURA LA BASE DE DATOS, CORS ENTRE OTROS */