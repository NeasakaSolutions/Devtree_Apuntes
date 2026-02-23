// Importaciones:
import { Router } from 'express';
import { createAccount } from './handlers';

// Instancias:
const router = Router()

// Autenticacion y regsitro:
router.post("/auth/register", createAccount);

export default router

/*AQUI VAN TODAS LAS RUTAS DE LA PAGINA */

