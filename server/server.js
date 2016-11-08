const express = require('express');
const app = express();
const path = require('path');
const appDir = path.dirname(require.main.filename);

app.use('/', express.static('dist'));

// serve JSON data
app.get('/data/:filename', function(req,res){
  res.sendFile(path.join(appDir + req.originalUrl));
});

// handle every other route with index.html
app.get('*', function (req, res){
  res.sendFile(path.join(appDir + '/dist/index.html'));
});

module.exports = app;
