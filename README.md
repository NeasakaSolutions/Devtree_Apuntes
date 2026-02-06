# Instalación de Node.js en Ubuntu

Esta guía explica cómo instalar **Node.js** en Ubuntu usando **NVM (Node Version Manager)**, la forma recomendada.

## Instalación con NVM (recomendado)

- Abrir una terminal

- Ejecuta el siguiente comando:

```bash
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

- Cerrar y abrir nuevamente la terminal

- Instalar Node.js version estable:

```bash
nvm install --lts
```

- Verificar la instalacion:

```bash
node -v
npm -v
```