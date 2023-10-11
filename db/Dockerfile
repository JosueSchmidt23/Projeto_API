# Dockerfile
FROM mysql:8.0.23
ENV MYSQL_DATABASE loja
ENV MYSQL_ROOT_PASSWORD password
ADD setup.sql /docker-entrypoint-initdb.d
EXPOSE 3306