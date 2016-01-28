var express = require('express');
var router = express.Router();

var Categorie = require('../models/category') //this file is giving us accecss to the mongoose category model object

/* GET users listing. */
//Since we're in the file categories, we don't need to specify /categories, it would come out as /categories/categories
router.get('/', function(req, res, next) {
  Categorie.getCategories(function(err, categories){
    if(err){
      console.log(err);
    }
    res.json(categories);
  })
});

//adding route for individual id
//req.params.id has to match '/:id' you can put whatever you want as long as they match
router.get('/:id', function(req, res, next) {
  Categorie.getCategoryById(req.params.id, function(err, category){
    if(err){
      console.log(err);
    }
    res.json(category);
  });
});

module.exports = router;
