const express = require('express');
const path = require('path');

// Do I need this?
const bodyParser = require('body-parser');

const index = require('./routes/index');
const api = require('./routes/api');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, '/../public')));

// Does this do anything?
app.use(bodyParser.json());


app.use('/', index);
app.use('/api', api);

app.listen(process.env.PORT || 3000);