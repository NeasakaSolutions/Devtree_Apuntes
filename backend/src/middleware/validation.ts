// Importaciones:
import type { Request, Response, NextFunction } from "express"
import { validationResult } from "express-validator"

// Utilizar el codigo en cualquier parte del programa
export const handleIputErrors = (req: Request, res: Response, next: NextFunction) => {

    let errors = validationResult(req);
    
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }

        // Pasar a la siguiente funcion:
        next();
}

/*AQUI SE MANEJAN LOS ERRORRES */
