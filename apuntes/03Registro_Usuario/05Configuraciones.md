# Configuracion del handle:

- Ir al archivo de User.ts en la carpeta de models y agregar el handle en la estructura de interface:
```typescript
interface IUser {
    handle: string
    name: string
    email: string
    password: string
};
```

- En el mismo archivo en la parte de userSchema:
```typescript
handle: {
        type: String,
        require: true,
        trim: true
        lowercase: true,
        unique: true,
    },
```

- En el mismo archivo en la parte del email agregar el lowercase:
```typescript
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true
    },
```

- En terminal ejecutar:
```bash
npm i slug
```

- Ir al archivo de index.ts de la carpeta handlers e importar lo siguiente:
```typescript
import slug from "slug";
```

- Ejecutar en terminal:
```bash
npm i --save-dev @types/slug
```

- En el mismo archivo agregar la siguiente funcion despues de hashear la password:
```typescript
// Las comillas vacias son para que no ponga nada en los espacios y junte todo el slug
    const handle = slug(req.body.handle, "");

    // Validaciones:
    const handleExists = await User.findOne({handle});

    if (handleExists){
        // Variable de error:
        const error = new Error("Nombre de usuario no disponible");
        
        return res.status(409).json({error: error.message});
    }

```

- Hacer la instancia del handle:
```typescript
user.handle = handle
```

- Modificar el body de tu controlador de apis y agregar el handle:
```bash
{
    "handle": "Nea Odzuka",
    "name": "Nea",
    "email": "correo@correo.com",
    "password": "12345678"
}
```

- Hacer la comprobacion de funcionamiento con el controlador de apis.




