// Importaciones:
import { Request, Response } from "express";
import User from "../models/User";

// Funcion para crear usuario:
export const createAccount = async(req: Request, res: Response) => {
    // Crear usuario:
    const user = new User(req.body);
    await user.save();

    // Respuesta para el servidor
    res.send("Registro creado correctamente.");
}

/*AQUI SE ALMACENAN FUNCIONES PARA UTILIZAR EN OTROS ARCHIVOS */