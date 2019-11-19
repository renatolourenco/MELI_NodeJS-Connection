const meli = require('../repository/api_connection');

module.exports = (app, repository) => {


    app.post('/auth', (req, res, next) => {
        console.log(req.body);
        res.json({
            message: '123 testando'
        });
    });


    app.get('/login', (req, res, next) => {
        console.log('testeLogin');
        meli.meliAuth();
        res.json({
            message: 'Autenticando...'
        });
    });
    

}