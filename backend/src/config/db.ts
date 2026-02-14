// Importaciones:
import mongoose, { Connection } from "mongoose";
import colors from "colors";

// Conexion a la base de datos:
export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        const url = colors.cyan.bold(`${connection.connection.host}:${connection.connection.port}`);

        console.log(`MongoDB conectado en: ${url}`);
    } catch (error) {
        console.log(colors.bgRed.white.bold(error.message));
        process.exit(1);
    }
}
