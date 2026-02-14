# Registro de usuarios

- Agregar password al body de la API en postman:

```json
{
    "name": "Nea",
    "email": "correo@correo.com",
    "password": "ijole1234"
}
```

- Crear una carpeta llamada "models" dentro de la carpeta /src y un archivo llamado "User.ts":

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
│   │   └──  models/    CARPETA QUE DEBES DE CREAR
│   │   │   └── User.ts ARCHIVO QUE DEBES DE CREAR
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env
```

- En User.ts agregar:

```typescript
// Importaciones:
import mongoose, { Schema } from "mongoose";

// Interfaz (Codigo de typescript):
interface IUser {
    name: string
    email: string
    password: string
};

// Esquema de users (Codigo de mongoose):
const userSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    }
});

// Crear el modelo:
const User = mongoose.model<IUser>("User", userSchema);

// Usar User en cualquier archivo:
export default User;
```

