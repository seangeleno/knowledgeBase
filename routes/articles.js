var express = require('express');
var router = express.Router();

var Article = require('../models/article') //this file is giving us accecss to the mongoose article model object

/* GET users listing. */
//Since we're in the file articles, we don't need to specify /articles, it would come out as /articles/articles
router.get('/', function(req, res, next) {
  Article.getArticles(function(err, articles){
    if(err){
      console.log(err);
    }
    res.json(articles);
  })
});

//adding route for individual id
//req.params.id has to match '/:id' you can put whatever you want as long as they match
router.get('/:id', function(req, res, next) {
  Article.getArticleById(req.params.id, function(err, article){
    if(err){
      console.log(err);
    }
    res.json(article);
  })
});
//req.params.category and :category must match
router.get('/category/:category', function(req, res, next) {
  Article.getArticleByCategory(req.params.category, function(err, articles){
    if(err){
      console.log(err);
    }
    res.json(articles);
  })
});

 router.post('/', function(req, res, next){
   // Get Form Values
   var title = req.body.title;
   var category = req.body.category;
   var body = req.body.body;
   // You could technically place req.body.value directly but it's a good idea to separate them.

   // Article Object
   var newArticle = new Article({
     title: title,
     category: category,
     body: body
   });

   //Update Article
   router.put('/', function(req, res, next){
     var id = req.body.id;
     var data = {
       title: req.body.title,
       category: req.body.category,
       body: req.body.body
     };
   })
   // Create Article
   Article.createArticle(newArticle, function(err, article){
     if(err){
       console.log(err);
     }
     //redirect
     res.location('/articles');
     res.redirect('/articles')
   });
 });

//Remove Article
router.delete('/:id', function(req, res, next){
  var id = req.params.id;

  //removeArticle was created in the model
  Article.removeArticle(id, function(err, article){
    if(err){
      console.log(err);
    }
    res.location('/articles');
    res.redirect('/articles')
  });
});

module.exports = router;
