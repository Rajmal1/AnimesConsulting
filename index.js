const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { corsOptions } = require('./startup/corsConfig');
// const consultApi = require('./middlewares/consultApiMiddleware');
const port = process.env.PORT;

var app = express();

app.use(cors(corsOptions));
// app.use(consultApi());
require('./startup/logging')();
require('./startup/db')();

app.listen(() => {
    console.log('Listening in port: ', port);
});