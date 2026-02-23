// Importaciones:
import { Request, Response } from "express";
import User from "../models/User";
import { hashPassword } from "../utils/auth";

// Funcion para crear usuario:
export const createAccount = async(req: Request, res: Response) => {

    // Variables:
    const { email, password } = req.body;

    // Validaciones:
    const userExists = await User.findOne({email}); // findOne == WHERE en MySQL

    if (userExists){
        // Variable de error:
        const error = new Error("El usuario ya esta registrado");
        
        return res.status(409).json({error: error.message});
    } 

    // Crear usuario:
    const user = new User(req.body);
    // hash de la password
    user.password = await hashPassword(password);

    await user.save();

    // Respuesta para el servidor
    res.status(201).send("Registro creado correctamente.");
}

/*AQUI SE ALMACENAN FUNCIONES PARA UTILIZAR EN OTROS ARCHIVOS */