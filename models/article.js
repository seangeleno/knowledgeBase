var mongoose = require('mongoose');

var articleShema = mongoose.Schema({
  title: {
    type: String,
    index: true,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  category: {
    type: String,
    index: true,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

var article = module.exports = mongoose.model('Article', articleSchema);


//Get all articles
module.exports.getArticles = function (callback){
  Article.find(callback);
}

// Get article by ID
module.exports.getArticleById = function(id, callback){
  Article.findById(id, callback);
}

//Get Category articles
//We want article category field to match the category thats passed in
module.exports.getArticleByCategory = function(category, callback){
  var query = {category: category };
  Article.find(query, callback)
}

//
