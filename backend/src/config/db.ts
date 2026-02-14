// Importaciones:
import mongoose, { Connection } from "mongoose";

// Conexion a la base de datos:
export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        const url = `${connection.connection.host}:${connection.connection.port}`

        console.log(`MongoDB conectado en: ${url}`);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}
