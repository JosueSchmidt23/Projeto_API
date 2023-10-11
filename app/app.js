const express = require('express');
const app = express();
const axios = require('axios');

app.get('/get.clientes', async (req, res) => {
  try {
    const response = await axios.post('http://api:3000/clientes');
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao buscar clientes');
  }
});

app.listen(8080, () => console.log('Aplicação rodando na porta 8080'));