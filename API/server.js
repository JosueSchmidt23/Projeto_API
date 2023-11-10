const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 3000; // Porta em que a API vai escutar

// Configuração da conexão com o banco de dados MySQL
const dbConfig = {
  host: 'banco-dados',
  user: 'user',
  password: 'Senha_Banco',
  database: 'loja',
};

// Função para aguardar um determinado período de tempo (10 segundos)
//function waitForDatabaseConnection() {
 // return new Promise((resolve) => {
  //  setTimeout(resolve, 10000); // Aguarda 10 segundos
 // });
//}

// Endpoint para processar a requisição da aplicação
app.post('/get.clientes', async (req, res) => {
  try {
    // Aguarda o tempo definido antes de tentar conectar
   // await waitForDatabaseConnection();

    // Conecta-se ao banco de dados
    const connection = await mysql.createConnection(dbConfig);

    // Realiza uma consulta para obter informações sobre clientes
    const [rows, fields] = await connection.execute('SELECT * FROM cliente');

    // Fecha a conexão com o banco de dados
    connection.end();

    // Retorna os resultados em formato JSON
    res.json(rows);
  } catch (error) {
    console.error('Erro ao consultar o banco de dados:', error);
    res.status(500).json({ error: 'Erro ao consultar o banco de dados' });
  }
});

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});