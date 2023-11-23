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
Caso ocorrer o erro:
```Terminal
2.970 npm ERR! code SELF_SIGNED_CERT_IN_CHAIN
2.970 npm ERR! errno SELF_SIGNED_CERT_IN_CHAIN
2.979 npm ERR! request to https://registry.npmjs.org/axios failed, reason: self signed certificate in certificate chain
2.985
2.985 npm ERR! A complete log of this run can be found in:
2.985 npm ERR!     /root/.npm/_logs/2023-11-23T12_26_57_338Z-debug.log
------
------
 > [api 4/4] RUN npm install:
2.963 npm ERR! code SELF_SIGNED_CERT_IN_CHAIN
2.963 npm ERR! errno SELF_SIGNED_CERT_IN_CHAIN
2.972 npm ERR! request to https://registry.npmjs.org/mysql2 failed, reason: self signed certificate in certificate chain
2.977
2.977 npm ERR! A complete log of this run can be found in:
2.977 npm ERR!     /root/.npm/_logs/2023-11-23T12_26_57_333Z-debug.log
------
failed to solve: process "/bin/sh -c npm install" did not complete successfully: exit code: 1
```
Para solucionar ele é preciso colocar o seguinte código no Dockerfile da API e da Aplicação:
```Dockerfile
RUN npm config set strict-ssl false
```

### Testando o Projeto
Utilize este comando para testar o projeto:
```Terminal
docker exec -it container-aplicacao curl -X POST -H "Content-Type: application/json" http://container-api:3000/get.clientes
```
OBS: Este comando pode ser executado em qualquer lugar do computador. Tanto na pasta do projeto utilizando o Terminal, tanto direto pelo Prompt de Comando!

Caso queira adicionar ou excluir clientes do Banco de Dados é só utilizar o DBeaver ou outro aplicativo semelhante.
