import { getConnection, sql, queryuser } from "../database/index.js";


export const getUsers = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queryuser.getAllUsers);
        // console.log(result);
        res.json({
            response_code: 0,
            message: 'Consulta Exitosa',
            data: result.recordset
        }
        )
    } catch (error) {
        console.log(error)
        res.status(500);
        res.json({
            response_code: 99,
            message: 'Error Inesperado',
            data: error.message
        }
        )
    }
}

export const createUser = async (req, res) => {
    const { id_usuario, nom_usuario, usr_creacion } = req.body
    if (id_usuario == null) {
        return res.status(400).
            json(
                {
                    response_code: 99,
                    message: 'Requerido Identificador de Usuario',
                    data: null
                })
    }
    if (nom_usuario == null) {
        return res.status(400).
            json({
                response_code: 99,
                message: 'Requerido Nombrer de Usuario',
                data: null
            })
    }
    if (usr_creacion == null) {
        return res.status(400).
            json({
                response_code: 99,
                message: 'Requerido Usuario Creador',
                data: null
            })
    }
    // console.log(id_usuario, nom_usuario, usr_creacion)
    try {
        const pool = await getConnection();
        let result = await pool.request()
            .input('id', id_usuario)
            .query(queryuser.getUserById);
        // console.log(result.recordset[0]);
        // console.log(result)
        if (result.recordset[0] == null) {
            // console.log("Puede Continuar");
            let salida=pool.request()
                .input("ide_usuario", sql.VarChar, id_usuario)
                .input("nom_usuario", sql.VarChar, nom_usuario)
                .input("cod_estado", sql.Char, 'A')
                .input("usr_creacion", sql.VarChar, usr_creacion)
                .query(queryuser.createUser)
            // console.log(salida)    
            res.status(201)
            res.json({
                response_code: 0,
                message: 'Usuario Creado Correctamente',
                data: result.recordset
            })
        }
        else {
            // console.log("DATA");
            res.status(200);
            res.json({
                response_code: 99,
                message: 'No se Puede insertar registro duplicado',
                data: result.recordset
            })
        }
        res.status(201)
    } catch (error) {
        console.log(error)
        res.status(500);
        res.json({
            response_code: 99,
            message: 'Error Inesperado',
            data: error.message
        }
        )
    }
}

export const getUserById = async (req, res) => {
    const { id } = req.params;
    // console.log(id);
    try {
        const pool = await getConnection();
        let result = await pool.request()
            .input('id', id)
            .query(queryuser.getUserById);
        // console.log(result.recordset[0]);
        if (result.recordset[0] == null) {
            //console.log("NULO");
            res.status(200);
            res.json({
                response_code: 99,
                message: 'No se encuentra registro',
                data: result.recordset
            })
        }
        else {
            //console.log("DATA");
            res.status(200);
            res.json({
                response_code: 0,
                message: 'Datos Encontrados',
                data: result.recordset
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500);
        res.json({
            response_code: 99,
            message: 'Error Inesperado',
            data: error.message
        }
        )
    }
}


export const deleteUserById = async (req, res) => {
    const { id } = req.params;
    // console.log(id);
    try {
        const pool = await getConnection();
        let result = await pool.request()
            .input('id', id)
            .query(queryuser.getUserById);
        // console.log(result.recordset[0]);
        console.log(result)
        if (result.recordset[0] == null) {
            // console.log("Puede Continuar");
            res.status(200);
            res.json({
                response_code: 99,
                message: 'Usuario no existe',
                data: result.recordset
            })
        }
        else {
            let salida=pool.request()
                .input('id', id)
                .query(queryuser.deleteUserById)
            // console.log(salida)    
            res.status(200)
            res.json({
                response_code: 0,
                message: 'Usuario Eliminado Correctamente',
                data: result.recordset
            })
            // console.log("DATA");
        }
    } catch (error) {
        console.log(error)
        res.status(500);
        res.json({
            response_code: 99,
            message: 'Error Inesperado',
            data: error.message
        }
        )
    }
}