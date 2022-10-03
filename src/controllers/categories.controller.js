import { getConnection, sql, querycategory } from "../database";

// Obtener Categorias
export const getCategories = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querycategory.getAllCategories);
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

// Recuperar Categoria po ID
export const getCategoryById = async (req, res) => {
    const { id } = req.params;
    // console.log(id);
    try {
        const pool = await getConnection();
        let result = await pool.request()
            .input('id', id)
            .query(querycategory.getCategoryById);
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

// Crear Categoria
export const createCategory = async (req, res) => {
    const { nom_categoria, cod_color, cod_hover_color, cat_imagen, usr_creacion } = req.body

    //Validaciones
    if (nom_categoria == null) {
        return res.status(400).
            json(
                {
                    response_code: 99,
                    message: 'Requerido Nombre de Categoria',
                    data: null
                })
    }
    if (cod_color == null) {
        return res.status(400).
            json({
                response_code: 99,
                message: 'Requerido Color',
                data: null
            })
    }
    if (cod_hover_color == null) {
        return res.status(400).
            json({
                response_code: 99,
                message: 'Requerido Color Hover',
                data: null
            })
    }
    if (cat_imagen == null) {
        return res.status(400).
            json({
                response_code: 99,
                message: 'Requerido Imagen',
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

    try {
        const pool = await getConnection();
        let salida = pool.request()
            .input("nom_categoria", sql.VarChar, nom_categoria)
            .input("cod_estado", sql.Char, 'A')
            .input("cod_color", sql.VarChar, cod_color)
            .input("cod_hobber_color", sql.VarChar, cod_hover_color)
            .input("cat_imagen", sql.VarChar, cat_imagen)
            .input("usr_creacion", sql.VarChar, usr_creacion)
            .query(querycategory.createCategory)
        res.status(201)
        res.json({
            response_code: 0,
            message: 'Usuario Creado Correctamente',
            data: salida.recordset
        })

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

export const deleteCategoryById = async (req, res) => {
    const { id } = req.params;
    // console.log(id);
    try {
        const pool = await getConnection();
        let result = await pool.request()
            .input('id', id)
            .query(querycategory.getCategoryById);
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
            let salida = pool.request()
                .input('id', id)
                .query(querycategory.deleteCategoryById)
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