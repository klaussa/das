
// CONECTION
// var mongoose = require('mongoose');
var express = require('express'),
  app = express(),
  PROJECT_DIR = '.';
var port = process.env.PORT || 3000;

// mongoose.connect('mongodb://52.16.143.140/dojo-main');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));

//  var datas = db.model('datas', {
//      user_id: { type : String},
//     time: { type: Date},
//     data_type: { type : String }
//  });
// app.js


  app.use('/bower_components', express.static(__dirname  + '/bower_components'));
  app.use('/css', express.static(__dirname  + '/css'));
  app.use('/img', express.static(__dirname  + '/img'));
  app.use('/js', express.static(__dirname  + '/js'));


app.get('/test', function(req, res){
  // datas.find(function(err, todos) {

  //           // if there is an error retrieving, send the error. nothing after res.send(err) will execute
  //           if (err)
  //               console.log(err)
  //               res.send(err)

  //           res.json(todos); // return all todos in JSON format
  //       });




});


app.all('/*', function(req, res) {
  res.sendFile('index.html', { root: __dirname });
});

app.listen(port);
