# Configurar Nodemon

### Instalar dependencias:

- En terminal ejecutar:

```bash
npm i -D nodemon
```

- Ir al archivo package.json y modificar esta parte:

```javascript
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

- Agregar la siguiente linea y en caso de que salga tambien "test", eliminar la linea "test":

```javascript
  "scripts": {
    "dev": "nodemon index.js"
  },
```

- Probar funcionamiento del servidor, en terminal escribir:

```bash
npm run dev
```


