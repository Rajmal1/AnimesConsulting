const mongoose = require('mongoose');
const dbUri = process.env.URL_DB_GUEST;

module.exports = () => {
    mongoose.connect(dbUri)
        .then(() => console.log('Connected to DB.'));
}
