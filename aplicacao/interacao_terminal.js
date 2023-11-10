const readline = require('readline');
const { exec } = require('child_process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Digite o comando curl para fazer a requisição à API: ', (curlCommand) => {
  rl.close();

  if (curlCommand === 'curl -X POST -H "Content-Type: application/json" http://api:3000/clientes') {
    // Se o usuário inserir o comando correto, executa a aplicacao.js
    const { spawn } = require('child_process');
    const aplicacaoProcess = spawn('node', ['aplicacao.js']);

    aplicacaoProcess.stdout.on('data', (data) => {
      console.log(`Dados da API (formato JSON): ${data}`);
    });
    // Se o usuário inserir o comando errado, mostra uma mensagem de erro
    aplicacaoProcess.on('exit', (code) => {
      console.log(`A aplicação foi encerrada com código ${code}`);
    });
  } else {
    console.error('Comando incorreto. Certifique-se de que o comando é "curl -X POST -H "Content-Type: application/json" http://api:3000/clientes".');
  }
});
