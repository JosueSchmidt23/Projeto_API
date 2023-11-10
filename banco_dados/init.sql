CREATE TABLE cliente (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  email VARCHAR(255)
);


  USE loja;
  
-- Insere três clientes na tabela cliente
INSERT INTO cliente (nome, email)
VALUES
    ('Cliente 1', 'cliente1@email.com'),
    ('Cliente 2', 'cliente2@email.com'),
    ('Cliente 3', 'cliente3@email.com');
