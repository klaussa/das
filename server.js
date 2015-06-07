var express = require('express'),
  app = express(),
  PROJECT_DIR = '.';

app.configure(function() {

  app.use('/css', express.static(__dirname + PROJECT_DIR + '/css'));
  app.use('/images', express.static(__dirname + PROJECT_DIR + '/images'));
  app.use('/js', express.static(__dirname + PROJECT_DIR + '/js'));

});


app.all('/*', function(req, res) {
  res.sendfile('index.html', { root: __dirname + PROJECT_DIR });
});

app.listen(3000);
