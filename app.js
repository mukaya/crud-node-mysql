const express = require('express');
const apprenant_routes = require('./routes/apprenant_routes');
const bodyParser = require('body-parser');
const app = express();

app.set('views','views');
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/', apprenant_routes);

module.exports = app;