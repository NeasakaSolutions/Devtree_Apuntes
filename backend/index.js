// Iportaciones:
const express = require('express');

// Instancia del servidor:
const app = express();

// Routing:
app.get('/', (req, res) => {
    res.send("Hola mundo en express");
});

// Generar servidor:
app.listen(4000, () => {
    console.log("Servidor funcionando.");
});


