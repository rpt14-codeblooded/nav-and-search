const express = require ('express');
const app = express();
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const dir = path.parse(__dirname).dir;

app.use(cors());
app.use(logger('dev'));
app.use(express.static(dir + '/public'));

module.exports = app;