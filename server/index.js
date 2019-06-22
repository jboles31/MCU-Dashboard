require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = require('../database-mongo/index');
var axios = require('axios');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/api/:title', (req, res) => {
  // console.log(req.params.title);
  // db.checkEntry(req.params.title, (err, results) => {
  //   if (err) {
  //     console.log('going for imdb')
      axios.get(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${req.params.title}`)
      .then((data) => {
        // console.log('data.data in server', data.data);
        // db.insertEntry(data.data, (err) => {
        //   console.log('insert into mongo')
        //   if (err) { 
        //     throw err 
        //   } else {
            res.send(data.data);
        //   }
        // })
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(400);
      })
  //   } else {
  //     console.log('found on mongo', results);
  //     res.send(results);
  //   }
  // })
})

app.get('/info', (req, res) => {
  db.selectAll((err, results) => {
    if (err) { res.sendStatus(400)}
    res.send(results)
  })
})

mongoose.connect('mongodb://localhost/movies', {useNewUrlParser: true}, (err) => {
  if (err) { throw error }
  app.listen(3000, function() {
    console.log('listening on port 3000!');
  });
});


