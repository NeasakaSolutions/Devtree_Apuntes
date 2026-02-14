// Importaciones:
import colors from "colors";
import server from "./server";

// Variables:
const port = process.env.PORT || 4000;

// Generar servidor:
server.listen(port, () => {
    console.log(colors.bgBlue.magenta.italic(`Servidor funcionando en el puerto: ${port}`));
});

/* ESTE ARCHIVO SOLO ES PARA INICIAR EL SERVIDOR */
