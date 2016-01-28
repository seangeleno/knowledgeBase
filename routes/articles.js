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

module.exports = router;
