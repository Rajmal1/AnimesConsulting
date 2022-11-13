const mongoose = require('mongoose')
const { Schema } = mongoose;

const filmSchema = new Schema({
    titulo: String,
    titulo_original: String,
    descricao: String,
    dataLancamento: String,
    pontuacao: Number
}, {
    collection: 'Films',
    versionKey: false
});

const Film = mongoose.model('Film', filmSchema);

module.exports = Film;