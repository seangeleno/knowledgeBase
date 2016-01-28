var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
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

var Article = module.exports = mongoose.model('Article', articleSchema);


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

// Add an Article

module.exports.createArticle = function(newArticle, callback){
  newArticle.save(callback);
}

//Update an article
module.exports.updateArticle = function(id, data, callback){
  var title    = data.title;
  var body     = data.body;
  var category = data.category;

  var query = {_id: id};

  Article.findbyId(id, function(err, article){
    if(!article){
      return next(new Error('Could not load article'));
    } else {
      //Update
      article.title    = title;
      article.body     = body;
      article.category = category;

      article.save(callback);
    }
  });
}

// Remove Article
module.exports.removeArticle = function(id, callback){
  Article.find({_id:id}).remove(callback);
}
