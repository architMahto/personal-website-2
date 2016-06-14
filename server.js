var express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    cors = require('cors'),
    path = require('path'),
    port = process.env.PORT || 8080;

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static(path.join(__dirname + '/public')));

app.listen(port, function() {
  console.log("You are connected to port:", port);
})
