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
});

export default router
```

- Probar en postman la api para generar un dato en MOngoDB Compass.


