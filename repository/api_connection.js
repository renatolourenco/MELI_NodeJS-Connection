const meli = require('mercadolibre');


const clientId = '6458744986047762';
const clientSecret = 'DdVldBFQ7AuNds9cRmf1ZDZxgtsYqvSd';

const meliObject = new meli.Meli(clientId, clientSecret);

function meliAuth() {
    meliObject.getAuthURL('https://209b690e.ngrok.io/auth');
}

module.exports = {
    meliAuth
}