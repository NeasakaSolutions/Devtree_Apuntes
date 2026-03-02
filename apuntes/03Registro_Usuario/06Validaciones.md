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

- En router.ts de la carpeta principal agregar las siguientes validaciones:
```typescript
// Autenticacion y regsitro:
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
    createAccount);
```
