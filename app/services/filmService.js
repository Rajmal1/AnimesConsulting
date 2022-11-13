const filmModel = require('../models/filmModel');

const filmServices = {};

filmServices.criarFilmes = async (filmsArray) => {
    if (!filmsArray || filmsArray.lenght <= 0) {
        throw new Error('Não foi encontrado nenhum filme');
    }

    const filmsInsert = montarArrayFilmes(filmsArray);

    return await filmModel.create(filmsInsert);
};

filmServices.buscarFilmes = async (page = 1, limit = 200) => {
    return await filmModel.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .sort('-dataLancamento');
};

function montarArrayFilmes(filmsArray) {
    return filmsArray.map(e => {
        return new filmModel({
            titulo: e.title,
            titulo_original: e.original_title,
            descricao: e.description,
            dataLancamento: e.release_date,
            pontuacao: e.rt_score
        });
    });

}