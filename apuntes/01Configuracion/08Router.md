# Configuracion del Router

- Instalar insomnia o postman, dejo los videos:

```bash
Insomnia:
https://www.youtube.com/watch?v=9YZOjXAQnX0

Postman:
https://www.youtube.com/watch?v=vKJmUWd0EXQ
```

- Agregar la siguente ruta en postman o insomnia:

```bash
http://localhost:5173/auth/register
```

- En router.ts agregar:

```typescript
// Autenticacion y regsitro:
router.post("/auth/register", (req, res) => {
    console.log("Desde registro");
});
```

- En la ruta que se agrego anteriormente en psotman, escoger el modo "POST" y mandar una solicitud, en vs code debe de aparecer:

```bash
[nodemon] restarting due to changes...
[nodemon] starting `ts-node src/index.ts`
Servidor funcionando en el puerto: 4000
Desde registro
```

- En router.ts cambiar en console.log por:

```typescript
// Autenticacion y regsitro:
router.post("/auth/register", (req, res) => {
    console.log(req.body);
});
```

- Ir a server.ts y agregar:

```typescript
// Leer datos de formularios:
app.use(express.json());
```

- En postman ir a la seccion de body y agregar datos de prueba:

```json
{
    "name": "Nea",
    "email": "correo@correo.com"
}
```

- Mandar nuevamente el request en postman, en terminal de vscode debe de mostrar:

```bash
nodemon] restarting due to changes...
[nodemon] starting `ts-node src/index.ts`
Servidor funcionando en el puerto: 4000
{ name: 'Nea', email: 'correo@correo.com' }
```


