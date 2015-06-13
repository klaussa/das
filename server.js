var express = require('express'),
  app = express(),
  PROJECT_DIR = '.';



  app.use('/css', express.static(__dirname  + '/css'));
  app.use('/img', express.static(__dirname  + '/img'));
  app.use('/js', express.static(__dirname  + '/js'));




app.all('/*', function(req, res) {
  res.sendFile('index.html', { root: __dirname });
});

app.listen(3000);
