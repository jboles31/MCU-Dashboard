var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var infoSchema = mongoose.Schema({
  movies: [],
});

const Movies = mongoose.model('marvel', infoSchema);

var titlesSchema = mongoose.Schema({
  Title: String,
  Year: String,
  Actors: String,
  Plot: String,
  Poster: String,
})

const Titles = mongoose.model('title', titlesSchema)

var selectAll = (callback) => {
  Movies.find({}).limit(1).exec((err, info) => {
    if(err) {
      callback(err, null);
    } else {
      callback(null, info);
    }
  });
};

var insertEntry = (entry, callback) => {
  console.log("entry.Title in insert", entry.Title)
  Titles.create({Title: entry.Title, Year: entry.Year, Actors: entry.Actors, Plot: entry.Plot, Poster: entry.Poster}, (err) => {
    if (err) {
      callback('err') 
    } else {
      console.log('saved')
      callback();
    }
  })
}

var checkEntry = (entry, callback) => {
  entry = entry.replace('+', ' ');
  console.log('entry title', entry)
  Titles.find({Title: entry}, (err, info) => {
      if (info.length === 0) {
        callback('err', null)
      } else {
        // console.log('found in database', info)
        callback(null, info[0])
    }
  })
}

module.exports = {
  selectAll,
  checkEntry,
  insertEntry,
};
