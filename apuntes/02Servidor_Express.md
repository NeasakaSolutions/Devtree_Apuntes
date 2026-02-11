### Creacion del Servidor de Express

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