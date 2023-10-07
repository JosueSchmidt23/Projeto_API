const express = require('express');
const api = express();
const PORT = 3000;

api.use(express.json());

const getClientes = require('./clientes.js');

api.post('/get.clientes', getClientes);

api.listen(PORT, () => {
  console.log(`API está executando na porta ${PORT}`);
});