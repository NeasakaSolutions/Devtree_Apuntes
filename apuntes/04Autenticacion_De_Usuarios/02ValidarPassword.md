# Validar el password para el login.

- En la carpeta utils, en el archivo auth.ts generar la sigueinte funcion:
```typescript
// Funcion para comparar password
export const checkPassword = async(enteredPassword: String, hash: String) => {

    return await bcrypt.compare(enteredPassword, hash);
};
```

- En la carpeta handlers, en el archivo index.ts, agregar en la validacion del password:
```typescript
// VERIFICAR QUE SE IMPORTE BIEN EL checkpassword:
import { checkPassword, hashPassword } from "../utils/auth";

    // Validar password:
    const isPasswordCorrect = await checkPassword(password, user.password);
    // Validar si el usuario existe:
    if (!isPasswordCorrect){
        // Variable de error:
        const error = new Error("Password incorrecto.");
        
        return res.status(401).json({error: error.message});
    } 

    res.send("Autenticado...");
```