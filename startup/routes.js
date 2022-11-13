const express = require('express');
const filmsController = require('../app/controllers/filmsController');

module.exports = function (app) {
    app.use(express.json());
    app.use('/api/films', filmsController);
}