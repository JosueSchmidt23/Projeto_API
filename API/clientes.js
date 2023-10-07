const clientes = [
    { id: 1, nome: 'Cliente 1' },
    { id: 2, nome: 'Cliente 2' },
  ];
  
  module.exports = (req, res) => {
    res.json(clientes);
  };  