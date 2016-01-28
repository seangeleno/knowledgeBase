var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
  name: {
    type: String,
    index: true,
    required: true
  },
  description: {
    type: String
  }
});

var Category = module.exports = mongoose.model('Category', categorySchema);


//Get all articles
module.exports.getCategories = function (callback){
  Category.find(callback);
}

// Get article by ID
module.exports.getCategoryById = function(id, callback){
  Category.findById(id, callback);
}

//Get Category articles
//We want article category field to match the category thats passed in
module.exports.getArticleByCategory = function(category, callback){
  var query = {category: category };
  Article.find(query, callback)
}

//
module.exports.createCategory = function(newCategory, callback){
  newCategory.save(callback);
}
