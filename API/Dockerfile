# Use uma imagem Node.js apropriada
FROM node:14

# Copie os arquivos da API para o contêiner
COPY . /app

# Defina o diretório de trabalho
WORKDIR /app

# Instale as dependências da API
RUN npm install

# Comando para iniciar a API
CMD ["npm", "start"]