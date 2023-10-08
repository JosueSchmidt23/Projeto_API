# Projeto_API

Este é um projeto Docker para criar três containers Docker separados envolvendo uma Aplicação, API e Banco de Dados. O mesmo envolve a criação de uma rota na API para buscar informações de clientes no banco de dados e retornar uma resposta em JSON.

## Pré-requisitos
Certifique-se de ter o Docker Desktop e o Visual Studio Code instalado em seu computador.

### Criando o Container MySQL (Banco de Dados)
  Está é imagem oficial do MySQL que será usada no Docker para criar o banco de dados. Para criar o container do MySQL execute o comando: 
  ```Terminal
  docker run -d --name mysql-container -e MYSQL_ROOT_PASSWORD=suasenha -e MYSQL_DATABASE=loja mysql:latest
```
  Pode-se substuir o "suasenha" pela senha que desejar!

### Criando o Container API
  Para criar o container API. Primeiro tem que criar um diretório padrão para os projetos que irão ser criados, que pode ser chamado de "Projetos Docker". No mesmo crie outro diretório chamado de "API". Após, crie um arquivo "Dockerfile" para a API. Após repita o mesmo para os outros arquivos no diretório da API. Códigos estão diponibilizados neste repositório.

  No Terminal, navegue até o diretório da API e execute os seguintes comandos para criar e executar o container API:
  ```Terminal
docker build -t api-container .
docker run -d --name api-container -p 3000:3000 api-container
```
Estes codigos cria e executa o container API na porta 3000.

### Criando o Container Aplicação
  No diretório Projetos Docker crie outro diretório chamado de Aplicação. Dentro do diretório da aplicação, crie um arquivo chamado de "Dockerfile" com o código que também está diponibilizado no repositório. Repita o mesmo para os outros arquivos da Aplicação.

   No Terminal, navegue até o diretório da Aplicação e execute os seguintes comandos para criar e executar o container Aplicação:
   ```Terminal
docker build -t app-container .
docker run -d --name app-container -p 8080:8080 app-container
```
Os codigos cria e executa o container Aplicação na porta 8080.

### Testes
Após criar todos os arquivos tando da API tando da Aplicação e todos os containers estiverem em execução no Docker incluindo o MySQL (Banco de Dados) e só executar o comando no CMD (Prompt de Comando): 
```CMD
curl -X POST http://localhost:3000/get.clientes
```

### Resultado
  Se tudo estiver funcionando perfeitamente, o resultado esperado ao executar o Curl no CMD é:
```Resultado
[{"id":1,"nome":"Cliente 1"},{"id":2,"nome":"Cliente 2"}]
```