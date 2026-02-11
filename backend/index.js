// Iportaciones:
import express from "express"; // ESM Ecmascript module

// Variables:
const port = process.env.PORT || 4000;

// Instancia del servidor:
const app = express();

// Routing:
app.get('/', (req, res) => {
    res.send("Hola mundo en express");
});

// Generar servidor:
app.listen(port, () => {
    console.log("Servidor funcionando en el puerto:", port);
});


