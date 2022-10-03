import sql from 'mssql'

const dbSettings = {
    user :'fjperezn',
    password:'Vicente1609',
    server:'testchile.database.windows.net',
    database:'reportes_chile',
    port:1433,
    options: {
        encrypt: true,
        trustServerCertificate: true
    },
}

export async function getConnection(){
    try {
        const pool=await sql.connect(dbSettings);
        // const result =await pool.request().query('SELECT 1');
        // console.error(result);
        return pool;
    } catch (error) {
    console.error(error)        
    }
}

export{sql}


  