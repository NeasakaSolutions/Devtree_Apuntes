### Creacion del Servidor de Express

- Crear un archivo llamado index.js en la carpeta principal de backend:

```bash
Deevtree/
├── backend/
│   ├── node_modules/
│   ├── index.js    ARCHIVO QUE DEBES DE CREAR
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
```

- En el archivo index.js agregar:

```javascript
// Iportaciones:
const express = require('express');

// Instancia del servidor:
const app = express();

// Generar servidor:
app.listen(4000, () => {
    console.log("Servidor funcionando.");
});
```

---

### Enrutamiento:

```javascript
// Routing:
app.get('/', (req, res) => {
    res.send("Hola mundo en express");
});
```



