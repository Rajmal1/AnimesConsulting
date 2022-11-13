const axios = require('axios');
const url = process.env.GHIBLI_API;
const filmService = require('../app/services/filmService');
const winston = require('winston');


async function consultarApi() {
    try {
        const reqConfig = montarRequest();
        const { data } = await axios(reqConfig);

        await filmService.criarFilmes(data);
    } catch (err) {
        winston.error(err);
        throw new Error('Erro ao consultar API do Sutdio Ghibli');
    }
}

function montarRequest() {
    return {
        method: 'get',
        url: url
    }
}

module.exports = consultarApi;