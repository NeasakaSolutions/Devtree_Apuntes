# Hashear Passwords

- En la terminal:
```bash
npm i bcrypt
```

- En caso de encontrar vulnerabilidades:
```bash
npm audit fix
```

- En la carpeta "src" generar una nueva carpeta llamada utils y un archivo llamado auth.ts
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
│   │   └── utils/   CARPETA QUE DEBES DE CREAR
│   │       └── auth.ts ARCHIVO QUE DEBES DE CREAR
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env
```

- En index.ts de handlers, agregar el llamado de password a la variable:
```typescript
const { email, password } = req.body;
```

- En auth.ts:
```typescript
// Importaciones:
import bcrypt from "bcrypt";

// Funcion para hashear la password
export const hashPassword = async(password: string) => {
    // Hashear password:
    const salt = await bcrypt.genSalt(10);

    return await bcrypt.hash(password, salt);
}
```

- En index.ts de handlers agregar:
```typescript
import { hashPassword } from "../utils/auth";

    user.password = await hashPassword(password);
```

