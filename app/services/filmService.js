const filmModel = require('../models/filmModel');

const filmServices = {};

filmServices.createFilms = async (filmsArray) => {
    if (!filmsArray || filmsArray.lenght <= 0) {
        throw new Error('No movies found');
    }

    const filmsInsert = setUpArrayFilms(filmsArray);

    for (const element of filmsInsert) {
        await filmModel.findOneAndUpdate({ titulo: element.titulo },
            { $set: element },
            { upsert: true });
    }
};

filmServices.searchFilms = async (page = 1, limit = 10) => {
    return await filmModel.find()
        .limit(limit)
        .skip((page - 1) * limit)
        .sort({ dataLancamento: +1 });
};

function setUpArrayFilms(filmsArray) {
    return filmsArray.map(e => {
        return {
            titulo: e.title,
            titulo_original: e.original_title,
            descricao: e.description,
            dataLancamento: e.release_date,
            pontuacao: e.rt_score
        };
    });

}

module.exports = filmServices;