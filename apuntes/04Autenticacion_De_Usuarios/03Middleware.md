# Generar el middleware:

- Dentro de la carpeta /src, crear una carpeta llamada middleware y en esa carpeta crear un archivo llamado validator.ts:
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
│   │   ├──  handlers/   
│   │   │   └── index.ts.ts 
│   │   ├──  middleware/    CARPETA QUE DEBES DE CREAR
│   │   │   └── validation.ts   ARCHIVO QUE DEBES DE CREAR
│   │   └── utils/
│   │       └── auth.ts
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env
```

- Ir a la carpeta handlers y en el archivo index.ts, quitar el primer manejo de error ya que se anexara al middleware:
```typescript
let errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        });
    }
```

- En el archivo validation.ts que creaste agregar:
```typescript
// Importaciones:
import type { Request, Response, NextFunction } from "express"
import { validationResult } from "express-validator"

// Utilizar el codigo en cualquier parte del programa
export const handleIputErrors = (req: Request, res: Response, next: NextFunction) => {

    let errors = validationResult(req);
    
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }

        // Pasar a la siguiente funcion:
        next();
}
```

- Ir a router.ts y agregar el middleware a nivel de ruta, antes de createAccount, asegurate de hacerlo en las dos rutas que se tienen:
```typescript
// Regsitro:
router.post("/auth/register", 
// Validaciones:
    body("handle")
        .notEmpty()
        .withMessage("El handle no puede ir vacio."), 
    body("name")
        .notEmpty()
        .withMessage("El nombre no puede ir vacio."),
    body("email")
        .isEmail()
        .withMessage("El correo es invalido"),
    body("password")
        .isLength({min: 8})
        .withMessage("El password no puede ir vacio."),   
    handleIputErrors, //AQUI VA
    createAccount);

```