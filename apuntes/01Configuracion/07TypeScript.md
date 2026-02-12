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

- En la carpeta de src crear un archivo llamado server.ts y otro llamado router.ts:
```bash
Deevtree/
├── backend/
│   ├── node_modules/
│   ├── src/
│   │   ├── router.ts   ARCHIVO QUE DEBES DE CREAR
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
import router from "./router";

// Instancia del servidor:
const app = express();

// Usa el router para todas las rutas
app.use("/", router);

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

- En router.ts poner:

```typescript
// Importaciones:
import { Router } from 'express';

// Instancia del router:
const router = Router()

export default router
```

