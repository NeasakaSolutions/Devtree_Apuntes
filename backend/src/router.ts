// Importaciones:
import { Router } from 'express';

// Instancias:
const router = Router()

// Autenticacion y regsitro:
router.post("/auth/register", (req, res) => {
    console.log(req.body);
});

export default router

/*AQUI VAN TODAS LAS RUTAS DE LA PAGINA */

