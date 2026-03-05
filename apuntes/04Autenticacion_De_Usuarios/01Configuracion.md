# COnfiguracion inicial para la autenticacion de usuarios.

- Ir al router.ts y agregar una nueva ruta:
```typescript
router.post("/auth/login",
    //
);
```

- En index.ts de la carpeta handlers agregar:
```typescript
export const login = async(req: Request, res: Response) => {
    console.log("Desde login...")
};
```

- En router.ts agregar la importacion con la funcion que se anexo:
```typescript
import { createAccount, login } from './handlers';
```

- En postman, agregar una nueva api con el metodo post:
```bash
http://localhost:4000/auth/login
```

- En el body de la nueva api agregar los datos a validar en formato json:
```json
{
    "email": "correo@correo.com",
    "password": "123"
}
```

- En router.ts, agregar validaciones a la ruta de login:
```typescript
router.post("/auth/login",
    body("email")
        .isEmail()
        .withMessage("El correo es invalido"),
    body("password")
        .notEmpty()
        .withMessage("El password no puede ir vacio."),
    login
);
```

- Ir a index.ts de handler y acompletar la funcion de login con el manejo de errores:
```typescript
export const login = async(req: Request, res: Response) => {
    // Manejo de errores:
    let errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        });
    }

    // Variables:
    const { email, password } = req.body;

    // Validaciones:
    const user = await User.findOne({email}); // findOne == WHERE en MySQL

    // Validar si el usuario existe:
    if (!user){
        // Variable de error:
        const error = new Error("Ese usuario no esta registrado.");
        
        return res.status(404).json({error: error.message});
    } 

    // Validar password:

};
```