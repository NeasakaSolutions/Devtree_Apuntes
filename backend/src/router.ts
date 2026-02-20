// Importaciones:
import { Router } from 'express';
import User from './models/User';

// Instancias:
const router = Router()

// Autenticacion y regsitro:
router.post("/auth/register", async(req, res) => {
    // Crear usuario:
    const user = new User(req.body);
    await user.save();
    res.send("Registro creado correctamente.");
});

export default router

/*AQUI VAN TODAS LAS RUTAS DE LA PAGINA */

