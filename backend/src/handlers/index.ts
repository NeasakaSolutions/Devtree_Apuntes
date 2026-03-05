// Importaciones:
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import User from "../models/User";
import slug from "slug";
import { hashPassword } from "../utils/auth";

// Funcion para crear usuario:
export const createAccount = async(req: Request, res: Response) => {

    // Manejo de errores:
    let errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        });
    }

    // Variables:
    const { email, password } = req.body;

    // Validaciones:
    const userExists = await User.findOne({email}); // findOne == WHERE en MySQL

    if (userExists){
        // Variable de error:
        const error = new Error("Email no disponible");
        
        return res.status(409).json({error: error.message});
    } 

    // Las comillas vacias son para que no ponga nada en los espacios y junte todo el slug
    const handle = slug(req.body.handle, "");

    // Validaciones:
    const handleExists = await User.findOne({handle});

    if (handleExists){
        // Variable de error:
        const error = new Error("Nombre de usuario no disponible");
        
        return res.status(409).json({error: error.message});
    }

    // Crear usuario:
    const user = new User(req.body);
    // hash de la password
    user.password = await hashPassword(password);
    // Agregar el handle a la bd
    user.handle = handle

    await user.save();

    // Respuesta para el servidor
    res.status(201).send("Registro creado correctamente.");
}

export const login = async(req: Request, res: Response) => {
    // Manejo de errores:
    let errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        });
    }

    // Variables:
    const { email, password } = req.body;

    // Validaciones:
    const user = await User.findOne({email}); // findOne == WHERE en MySQL

    // Validar si el usuario existe:
    if (!user){
        // Variable de error:
        const error = new Error("Ese usuario no esta registrado.");
        
        return res.status(404).json({error: error.message});
    } 

    // Validar password:

};

/*AQUI SE ALMACENAN FUNCIONES PARA UTILIZAR EN OTROS ARCHIVOS */