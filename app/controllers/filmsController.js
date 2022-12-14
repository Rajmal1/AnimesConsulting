const express = require('express')
const router = express.Router();
const filmsService = require('../services/filmService');
const winston = require('winston');

router.get('/', async (req, res) => {
    try {
        const { page, limit } = req.query;

        const films = await filmsService.searchFilms(page, limit);

        if (!films || films.length <= 0) {
            res.status(204).send();
        }

        res.send(films);
    } catch (err) {
        winston.error(err);
        res.status(500).send(err.message);
    }
});

module.exports = router;