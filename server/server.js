const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const api = require('./routes/api');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.json());

app.use('/', index);
app.use('/api', api);

app.listen(process.env.PORT || 3000);