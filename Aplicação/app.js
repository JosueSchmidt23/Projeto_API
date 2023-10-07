const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 8080;

app.use(express.json());

// Rota para o método get.clientes
app.get('/get.clientes', (req, res) => {
  // Faz a chamada POST para a API
  axios.post('http://api-container:3000/get.clientes', { /* dados a serem enviados */ })
    .then((response) => {
      // Resposta da API
      const apiResponse = response.data;
      res.json(apiResponse);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Erro ao acessar a API' });
    });
});

app.listen(PORT, () => {
  console.log(`Aplicação está executando na porta ${PORT}`);
});