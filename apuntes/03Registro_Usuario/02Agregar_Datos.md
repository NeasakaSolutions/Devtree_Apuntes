# Agregar datos a la bd:

- Descargar MongoDB Compass:

```bash
https://www.mongodb.com/try/download/compass
```

- Copiar tu link del archivo .env y agregarlo a la conexion de MongoDB Compass, se debe de reemplazar por el de localhost

- En router.ts, volver asincrona la funcion de autenticacion y agregar las importaciones correspondientes:

```typescript
// Importaciones:
import { Router } from 'express';
import User from './models/User';

// Instancias:
const router = Router()

// Autenticacion y regsitro:
router.post("/auth/register", async(req, res) => {
    // Crear usuario:
    const user = new User(req.body);
    await user.save();

    // Respuesta para el servidor
    res.send("Registro creado correctamente.");
});

export default router
```

- Probar en postman la api para generar un dato en MOngoDB Compass.

- Crear una carpeta llamada handlers dentro de la carpeta "src" y alli mismo un archivo llamado index.ts:
```bash
Deevtree/
├── backend/
│   ├── node_modules/
│   ├── src/
│   │   ├── router.ts
│   │   ├── server.ts
│   │   ├── index.ts
│   │   ├──  config/
│   │   │   └── db.ts
│   │   ├── models/
│   │   │   └── User.ts
│   │   └── handlers/   CARPETA QUE DEBES DE CREAR
│   │       └── index.ts.ts ARCHIVO QUE DEBES DE CREAR
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env
```

- En index.ts del archivo que se acaba de crear agregar:
```typescript
// Importaciones:
import { Request, Response } from "express";
import User from "../models/User";

// Funcion para crear usuario:
export const createAccount = async(req: Request, res: Response) => {
    // Crear usuario:
    const user = new User(req.body);
    await user.save();

    // Respuesta para el servidor
    res.send("Registro creado correctamente.");
}
```

- En router.ts modificar y el codigo debe de quedar asi:
```typescript
// Importaciones:
import { Router } from 'express';
import { createAccount } from './handlers';

// Instancias:
const router = Router()

// Autenticacion y regsitro:
router.post("/auth/register", createAccount);

export default router
```


