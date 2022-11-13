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

        await filmService.criarFilmes(data);
    } catch (err) {
        winston.error(err);
        throw new Error('Erro ao consultar API do Sutdio Ghibli');
    }
}

module.exports = consultarApi;