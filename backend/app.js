const express = require('express');
const sql = require('mssql');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurações do SQL Server - ajuste usuário, senha, servidor e database
const config = {
  user: 'sistema_icav_sql',
  password: 'icav12345678',  // substitua pela sua senha real
  server: 'DESKTOP-VBJT15E',
  database: 'SistemaICAV',
  options: {
    encrypt: false,
    trustServerCertificate: true,
  }
};

app.use(express.json());

app.get('/', async (req, res) => {
  try {
    await sql.connect(config);
    res.send('API do Sistema ICAV rodando e conectada ao SQL Server!');
  } catch (err) {
    res.status(500).send('Erro ao conectar no banco: ' + err.message);
  } finally {
    await sql.close();
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
