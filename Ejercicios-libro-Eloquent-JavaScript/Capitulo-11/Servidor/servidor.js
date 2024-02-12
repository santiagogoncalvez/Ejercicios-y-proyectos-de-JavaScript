const http = require('http');
console.log("Codigo: ", code);


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Servidor Node.js funcionando</h1>');
    res.write(`<script>` + code + `;console.log("Hola a todos")</script>`);
    res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor Node.js ejecutándose en el puerto ${PORT}`);
});