# Parte de 2 de configuracion de typescript

- En package.json agregar las siguientes lineas debajo de "dev":

```javascript
"build" : "tsc",
"start" : "node dist/index.js"
```

- Debe de quedar asi:
```javascript
 "scripts": {
    "dev": "nodemon src/index.ts", // No olvidar la coma
    "build": "tsc", // No olvidar la coma
    "start" : "node dist/index.js"
  },
```

- En la carpeta de src crear el archivo server.ts:
```bash
Deevtree/
├── backend/
│   ├── node_modules/
│   ├── src/
│   │   ├── server.ts   ARCHIVO QUE DEBES DE CREAR
│   │   └── index.ts
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── tsconfig.json
```

- En server.ts poner:

```typescript
// Importaciones:
import express from "express"; // ESM Ecmascript module

// Instancia del servidor:
const app = express();

// Routing:
app.get('/', (req, res) => {
    res.send("Hola mundo en express");
});

export default app
```

- En index.ts borrar todo y dejar solo esto:

```typescript
// Importaciones:
import server from "./server";

// Variables:
const port = process.env.PORT || 4000;

// Generar servidor:
server.listen(port, () => {
    console.log("Servidor funcionando en el puerto:", port);
});
```

