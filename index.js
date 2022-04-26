const http = require('http');

const hostname = '192.168.50.131';

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;

    res.setHeader('Content-Type', 'text/plain');

    res.end('Hola Mundo\n');

});

server.listen(port, hostname, () => {
    console.log('El servidor se esta ejecutando en http://${hostname}:${port}/');
});