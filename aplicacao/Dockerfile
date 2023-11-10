# Use uma imagem Node.js apropriada
FROM node:14

# Copie os arquivos da aplicação para o contêiner
COPY . /app

# Defina o diretório de trabalho
WORKDIR /app

# Instale as dependências da aplicação
RUN npm install

# Comando para iniciar a aplicação
CMD ["npm", "start"]