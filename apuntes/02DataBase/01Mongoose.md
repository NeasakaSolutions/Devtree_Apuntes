# Configuracion de la database

- Crear una cuenta y generar una nueva base de datos o cluster, pagina:

```bash
https://www.bing.com/ck/a?!&&p=4a276a2e8273129b65165bebef8d24e93982d39ba4038146d110e522bb50e8e4JmltdHM9MTc3MDg1NDQwMA&ptn=3&ver=2&hsh=4&fclid=1a079522-24ba-6a7f-0738-83ca25d36b1b&psq=mongodb&u=a1aHR0cHM6Ly93d3cubW9uZ29kYi5jb20vZXM_bXNvY2tpZD0xYTA3OTUyMjI0YmE2YTdmMDczODgzY2EyNWQzNmIxYg
```

- Ejecutar en terminal:

```bash
npm i mongoose
```

- En caso de encontrar alguna vulnerabilidad:

```bash
npm audit fix
```

- En la carpeta de src, crear una carpeta llamada "config" y a esa carpeta generar un archivo llamado "db.ts":

```bash
Deevtree/
├── backend/
│   ├── node_modules/
│   ├── src/
│   │   ├── router.ts
│   │   ├── server.ts
│   │   ├── index.ts
│   │   └──  config/    CARPETA QUE DEBES DE CREAR
│   │       └── db.ts   ARCHIVO QUE DEBES DE CREAR
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── tsconfig.json
```

- En db.ts agregar lo siguiente y cambiar por tu password de mongoose:

```typescript
// Importaciones:
import mongoose, { Connection } from "mongoose";

// Conexion a la base de datos:
export const connectDB = async () => {
    try {
        const url = "mongodb+srv://root:<db_password>@cluster0.uutej77.mongodb.net/linktree_node_typescript_apuntes"
        const connection = await mongoose.connect(url);

        console.log(Connection);

        console.group("MongoDB Conectado.")
    } catch (error) {
        console.log(error);
    }
}
```

- En server.ts agregar la siguiente importacion y funcion:

```typescript
import { connectDB } from "./config/db";

// Llamando a la funcion de la conexion a la BD:
connectDB();
```

- En db.ts agregar:

```typescript
// Dentro del try:
const url2 = `${connection.connection.host}:${connection.connection.port}`

// Esta parte va en el "catch" del try catch:
console.log(error.message);
        process.exit(1);
```

