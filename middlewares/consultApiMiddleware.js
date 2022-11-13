const axios = require('axios');
const url = process.env.GHIBLI_API;
const winston = require('winston');


module.exports = consultarApi = async (req, res, next) => {
    try {
        const reqConfig = montarRequest();
        const films = await axios(reqConfig);

        verificarFilmes(req, films);

        next();
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

function verificarFilmes(req, films) {
    if (!films || films.lenght <= 0) {
        throw new Error('Não foi possível encontrar os filmes.')
    }

    req.films = films;
}