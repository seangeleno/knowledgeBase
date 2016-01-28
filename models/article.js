var mongoose = require('mongoose');

var articleShema = mongoose.Schema({
  title: {
    type: String,
    index: true,
    required: true
  },
  body {
    type: String,
    required: true
  },
  category: {
    type: String,
    index: true,
    required: true
  },
  date: {
    type: date,
    default: Date.now
  }
});

var article = module.exports = mongoose.model('Artile', articleSchema);

module.exports.getarticles = function (callback){
  article.find(callback);
}
