# Use a imagem MySQL apropriada
FROM mysql:latest

# Cria o banco de dados 'loja'
#ENV MYSQL_DATABASE=loja

# Variáveis de ambiente para a configuração do MySQL
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=loja
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=Senha_Banco

# Copia o arquivo SQL de inicialização para o contêiner
COPY init.sql /docker-entrypoint-initdb.d/

# Expõe a porta do MySQL (3306) para comunicação
EXPOSE 3306