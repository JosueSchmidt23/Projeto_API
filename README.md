# Projeto_API

Este é um projeto que simula a interação entre uma API, uma aplicação e um banco de dados MySQL. Onde neste projeto a Aplicação faz uma requisição para a API utilizando o comando "curl" em um método "POST". A API processa a requisição e cosulta o Banco de Dados para obter as informações sobre todos os clientes cadastrados, e a resposta da API para a Aplicação é em formato JSON.

## Pré-requisitos
Certifique-se de ter o Docker, GitHub e o DBeaver instalado em seu computador. O DBeaver é opcional.

### Clonando o Repositório
Com o Github instalado no computador, clone o repositório para sua máquina local indo em "Clone a repository" e em "URL", insira o link do deste repositório e clique em "Clone".

### Construindo a Imagem
Navegue até o diretório do repositório clonado no seu computador e execute o seguinte comando pelo Terminal: 
```Terminal
 docker-compose up
```
OBS: Ao executar este comando o Docker Desktop deve estar em execução no computador!

Após executar o comando o projeto já estará em execução no Docker e funcionando.

### Testando o Projeto
Utilize este comando para testar o projeto:
```Terminal
docker exec -it container-aplicacao curl -X POST -H "Content-Type: application/json" http://container-api:3000/get.clientes
```
OBS: Este comando pode ser executado em qualquer lugar do computador. Tanto na pasta do projeto utilizando o Terminal, tanto direto pelo Prompt de Comando!

Caso queira adicionar ou excluir clientes do Banco de Dados é só utilizar o DBeaver ou outro aplicativo semelhante.
