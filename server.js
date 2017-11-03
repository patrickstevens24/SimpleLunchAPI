var express = require('express');
var mon = require('mongoose');
var bp = require('body-parser');

mon.connect('mongodb://localhost/rest_test');

var app = express();
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.use('/api', require('./routes/api'));
app.listen(3000);
