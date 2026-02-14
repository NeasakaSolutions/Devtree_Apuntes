// Importaciones:
import mongoose, { Schema } from "mongoose";

// Interfaz (Codigo de typescript):
interface IUser {
    name: string
    email: string
    password: string
};

// Esquema de users (Codigo de mongoose):
const userSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    }
});

// Crear el modelo:
const User = mongoose.model<IUser>("User", userSchema);

// Usar User en cualquier archivo:
export default User;
