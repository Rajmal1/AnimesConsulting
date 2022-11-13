const express = require('express');
const filmsController = require('../app/controllers/filmsController');

function routes(app) {
    app.use(express.json());
    app.use('/api/films', filmsController);
}

module.exports = routes;