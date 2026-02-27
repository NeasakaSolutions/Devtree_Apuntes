# Agregar validaciones:

- En terminal ejecutar:
```bash
npm i express-validator
```

- En caso de que tire un error:
```bash
npm audit fix
```

- Ir al archivo de router.ts que se encuentra en la carpeta de "/src":
```typescript
import { body } from "express-validator"

router.post("/auth/register", body("handle").notEmpty(), createAccount);
```

- Ir a la carpeta de handle y en el archivo de index.s:
```typescript
import { validationResult } from "express-validator";

// Manejo de errores:
    let errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        });
    }
```
