const express = require('express');
const cors = require('cors');
require('dotenv').config();
const serverStatic = require('serve-static')
const port = process.env.PORT;

var app = express();

app.use(cors());
app.use(express.static('docs'));

require('./startup/logging')();
require('./startup/db')();
require('./startup/routes')(app);
require('./startup/consultApiMiddleware')();

app.listen(port, () => {
    console.log('Listening in port: ', port);
});