# Configuracion de las variables de entorno:

- Crear un archivo llamado .env en la raiz del backend:

```bash
Deevtree/
├── backend/
│   ├── node_modules/
│   ├── src/
│   │   ├── router.ts
│   │   ├── server.ts
│   │   ├── index.ts
│   │   └──  config/
│   │       └── db.ts
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env    ARCHIVO QUE DEBES DE CREAR
```

- Dentro del archivo de .env generar la url:

```typescript
MONGO_URI=mongodb+srv://root:<db_password>@cluster0.uutej77.mongodb.net/linktree_node_typescript_apuntes
```

- Ejecutar en terminal:
```bash
npm i dotenv
```

- En server.ts cargar la dependencia:

```typescript
import "dotenv/config";
```

- En db.ts reemplazar la url por las variables de entorno, debe de quedar asi el codigo final:

```typescript
// Importaciones:
import mongoose, { Connection } from "mongoose";

// Conexion a la base de datos:
export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        const url = `${connection.connection.host}:${connection.connection.port}`

        console.log(`MongoDB conectado en: ${url}`);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}
```

