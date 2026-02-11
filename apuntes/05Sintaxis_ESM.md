
### Configuracion de la sintaxis de ESM

- En package.json en la seccion:

```javascript
{
  "name": "backend",
  "version": "1.0.0",
  "description": "Primer proyecto con Express y TypeScript",
  "license": "ISC",
  "author": "NeasakaSolutions",
  "type": "commonjs",
  "main": "index.js",
```

- Modificar el type por:

```javascript
"type": "module",
```

- Debe de quedar asi:

```javascript
{
  "name": "backend",
  "version": "1.0.0",
  "description": "Primer proyecto con Express y TypeScript",
  "license": "ISC",
  "author": "NeasakaSolutions",
  "type": "module",
  "main": "index.js",
```

- Es normal si llega a salir algun error en la terminal.

- En index.js agregar la siguiente importacion:

```javascript
import express from "express";
```

- y eliminar:

```javascript
const express = require('express');
```

- Agregar:

```javascript
// Variables:
const port = process.env.PORT || 4000;
```

- Modificar la funcion del puerto, en vez del numero, colocar "port":

```javascript
// Generar servidor:
app.listen(port, () => {
    console.log("Servidor funcionando en el puerto:", port);
});
```

- El codigo debe de ir quedando de la sigueinte manera:

```javascript
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
```




