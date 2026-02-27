// Importaciones:
import { Router } from 'express';
import { body } from "express-validator"
import { createAccount } from './handlers';

// Instancias:
const router = Router()

// Autenticacion y regsitro:
router.post("/auth/register", body("handle").notEmpty(), createAccount);

export default router

/*AQUI VAN TODAS LAS RUTAS DE LA PAGINA */

