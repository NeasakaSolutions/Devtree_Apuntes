# Evitar datos duplicados:

- En index.ts de handlers agregar las siguientes validaciones:
```typescript
// Importaciones:
import { Request, Response } from "express";
import User from "../models/User";

// Funcion para crear usuario:
export const createAccount = async(req: Request, res: Response) => {

    // Variables:
    const { email } = req.body;

    // Validaciones:
    const userExists = await User.findOne({email}); // findOne == WHERE en MySQL

    if (userExists){
        // Variable de error:
        const error = new Error("El usuario ya esta registrado");
        
        return res.status(409).json({error: error.message});
    } 

    // Crear usuario:
    const user = new User(req.body);
    await user.save();

    // Respuesta para el servidor
    res.status(201).send("Registro creado correctamente.");
}
```


