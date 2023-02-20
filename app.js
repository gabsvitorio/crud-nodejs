const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Contet-Type', 'text/plain');
    res.end('Hello world! <3');
});

server.listen(port, hostname, () => {
    console.log("Servidor rodando na URL: (http://localhost:3000)!");
});