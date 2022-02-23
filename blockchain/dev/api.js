var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('hello word');
})
// get entire blockchain
app.get('/blockchain', function (req, res) {
    res.send(bitcoin);
  });
  
app.listen(3000);