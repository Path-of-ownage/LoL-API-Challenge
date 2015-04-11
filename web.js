/*globals require */
var compression = require('compression');
var express = require('express');
var path = require('path');
var app = express();
 
app.use(express.static(path.join(__dirname, '/dist')));
app.listen(process.env.PORT || 5000);