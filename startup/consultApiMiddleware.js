const axios = require('axios');
const url = process.env.GHIBLI_API;
const filmService = require('../app/services/filmService');
const winston = require('winston');


async function consultarApi() {
    try {
        const { data } = await axios({
            method: 'get',
            url: url
        });

        await filmService.createFilms(data);
    } catch (err) {
        winston.error(err);
        throw new Error('Error when querying the Studio Ghibli API');
    }
}

module.exports = consultarApi;