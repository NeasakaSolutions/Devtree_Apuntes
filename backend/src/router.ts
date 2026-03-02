// Importaciones:
import { Router } from 'express';
import { body } from "express-validator"
import { createAccount } from './handlers';

// Instancias:
const router = Router()

// Autenticacion y regsitro:
router.post("/auth/register", 
// Validaciones:
    body("handle")
        .notEmpty()
        .withMessage("El handle no puede ir vacio."), 
    body("name")
        .notEmpty()
        .withMessage("El nombre no puede ir vacio."),
    body("email")
        .isEmail()
        .withMessage("El correo es invalido"),
    body("password")
        .isLength({min: 8})
        .withMessage("El password no puede ir vacio."),   
    createAccount);

export default router

/*AQUI VAN TODAS LAS RUTAS DE LA PAGINA */

