// Importaciones:
import bcrypt from "bcrypt";

// Funcion para hashear la password
export const hashPassword = async(password: string) => {
    // Hashear password:
    const salt = await bcrypt.genSalt(10);

    return await bcrypt.hash(password, salt);
}

/*ARCHIVO QUE CONTIENE FUNCIONES DE BCRYPT */

