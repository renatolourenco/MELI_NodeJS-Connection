require('dotenv-safe').config();
const mercadoLivre = require('./api/mercado_livre');
const server = require('./server/server');

server.start(mercadoLivre, null, (err, app) => {
    console.log('Just started');
});