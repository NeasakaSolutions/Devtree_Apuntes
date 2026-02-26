// Importaciones:
import mongoose, { Schema } from "mongoose";

// Interfaz (Codigo de typescript):
interface IUser {
    handle: string
    name: string
    email: string
    password: string
};

// Esquema de users (Codigo de mongoose):
const userSchema = new Schema({
    handle: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true
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
