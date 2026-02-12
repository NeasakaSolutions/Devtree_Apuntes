# Instalacion y configuracion de typescript:

- En terminal:

```bash
npm i -D typescript ts-node
```

- A la misma altura que se creo el index.js, crear un archivo llamado tsconfig.json:

```bash
Deevtree/
├── backend/
│   ├── node_modules/
│   ├── index.js
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── tsconfig.json   ARCHIVO QUE DEBES DE CREAR
```

- Crear una carpeta llamada src y mover el index.js a esa carpeta y cambiar a index.ts:

```bash
Deevtree/
├── backend/
│   ├── node_modules/
│   ├── src/    CARPETA QUE DEBES DE CREAR
│   │   └── index.ts    ARCHIVO QUE DEBES MOVER
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── tsconfig.json
```

- En tsconfig.json pegar las sigueintes configuraciones:

```typescript
{
    "compilerOptions": {
        "outDir": "./dist",
        "rootDir": "./src",
        "lib": ["ESNext"],
        "target": "ESNext",
        "moduleResolution": "NodeNext",
        "module": "NodeNext",
        "strict": false,
        "sourceMap": true,
        "esModuleInterop": true,
        "declaration": true,
    },
    "include": ["src/**/*.ts"]
}
```

- Ir a package.json y donde esta el index.js:

```javascript
"scripts": {
    "dev": "nodemon index.js"
  },
```

- Cambiar toda la linea de "dev" por:

```javascript
 "scripts": {
    "dev": "nodemon src/index.ts"
  },
```

- En el mismo archivo de package.json eliminar la linea de "type":

```javascript
{
  "name": "backend",
  "type": "module", // SE BORRA ESTA LINEA
  "version": "1.0.0",
  "description": "Primer proyecto con Express y TypeScript",
  "license": "ISC",
  "author": "NeasakaSolutions",
  "main": "index.js",
```

- El archivo de package.json final debe de parecerse a esto:

```javascript
{
  "name": "backend",
  "version": "1.0.0",
  "description": "Primer proyecto con Express y TypeScript",
  "license": "ISC",
  "author": "NeasakaSolutions",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon src/index.ts"
  },
  "dependencies": {
    "express": "^5.2.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.11",
    "ts-node": "^10.9.2",
    "typescript": "^5.9.3"
  }
}
```

- Ejecutar en terminal:

```bash
npm i --save-dev @types/express
```

