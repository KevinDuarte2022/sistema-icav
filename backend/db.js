const sql = require('mssql');

const config = {
    user: 'sistema_icav_sql',
    password: 'icav12345678',
    server: 'DESKTOP-VBJT15E\\SQLEXPRESS',
    database: 'SistemaICAV',
    options: {
        encrypt: false,
        trustServerCertificate: true,
    }
   
}

sql.connect(config)
.then(() => console.log('Conectado ao SQL Server!'))
.catch(()=> console.log('Erro de conexão: ', err));