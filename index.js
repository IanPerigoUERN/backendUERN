const express = require('express');
const server = express();

const livros = require('./src/data/books.json');

server.get('/', (req, resp) => {
    return resp.json({ message: 'Olá, bem vindo ao sistema da biblioteca' });
});

server.get('/livros', (req, resp) => {
    return resp.json(livros)
});

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});


