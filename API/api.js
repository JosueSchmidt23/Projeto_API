const express = require('express');
const app = express();
app.use(express.json());

app.post('/clientes', (req, res) => {
  // Buscar dados do banco de dados aqui...
  res.json({ message: 'Dados do cliente' });
});

app.listen(3000, () => console.log('API rodando na porta 3000'));