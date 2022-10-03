export const queryuser = {
    getAllUsers: 'SELECT * FROM TA_USUARIOS ORDER BY COD_ESTADO,FEC_CREACION DESC ',
    createUser: 'INSERT INTO TA_USUARIOS (IDE_USUARIO, NOM_USUARIO,COD_ESTADO,FEC_CREACION,USR_CREACION) VALUES (@ide_usuario,@nom_usuario,@cod_estado,CURRENT_TIMESTAMP,@usr_creacion)',
    getUserById: 'SELECT * FROM TA_USUARIOS WHERE IDE_USUARIO=@id',
    deleteUserById: 'DELETE FROM TA_USUARIOS WHERE IDE_USUARIO=@id',
}   


export const querycategory = {
    getAllCategories: 'SELECT * FROM TA_CATEGORIA ORDER BY NOM_CATEGORIA ',
    getCategoryById: 'SELECT * FROM TA_CATEGORIA WHERE IDE_CATEGORIA=@id',
    

    
    //createUser: 'INSERT INTO TA_USUARIOS (IDE_USUARIO, NOM_USUARIO,COD_ESTADO,FEC_CREACION,USR_CREACION) VALUES (@ide_usuario,@nom_usuario,@cod_estado,CURRENT_TIMESTAMP,@usr_creacion)',
    //deleteUserById: 'DELETE FROM TA_USUARIOS WHERE IDE_USUARIO=@id',
}   