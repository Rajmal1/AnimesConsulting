const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT;

var app = express();

app.use(cors());

require('./startup/logging')();
require('./startup/db')();
require('./startup/routes')(app);
require('./startup/consultApiMiddleware')();

app.listen(port, () => {
    console.log('Listening in port: ', port);
});