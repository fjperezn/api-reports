export const queryuser = {
    getAllUsers: 'SELECT * FROM TA_USUARIOS ORDER BY COD_ESTADO,FEC_CREACION DESC ',
    createUser: 'INSERT INTO TA_USUARIOS (IDE_USUARIO, NOM_USUARIO,COD_ESTADO,FEC_CREACION,USR_CREACION) VALUES (@ide_usuario,@nom_usuario,@cod_estado,CURRENT_TIMESTAMP,@usr_creacion)',
    getUserById: 'SELECT * FROM TA_USUARIOS WHERE IDE_USUARIO=@id',
    deleteUserById: 'DELETE FROM TA_USUARIOS WHERE IDE_USUARIO=@id',
}   


export const querycategory = {
    getAllCategories: 'SELECT * FROM TA_CATEGORIA ORDER BY NOM_CATEGORIA ',
    getCategoryById: 'SELECT * FROM TA_CATEGORIA WHERE IDE_CATEGORIA=@id',
    createCategory: 'INSERT INTO TA_CATEGORIA (NOM_CATEGORIA, COD_ESTADO,COD_COLOR,COD_HOBBER_COLOR,CAT_IMAGEN,FEC_CREACION,USR_CREACION) VALUES (@nom_categoria, @cod_estado,@cod_color,@cod_hobber_color,@cat_imagen,CURRENT_TIMESTAMP,@usr_creacion)',
    deleteCategoryById: 'DELETE FROM TA_CATEGORIA WHERE IDE_CATEGORIA=@id',
}   