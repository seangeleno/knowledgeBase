var app = angular.module("kb", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/categories', {
      templateUrl: 'views/categories.view.html',
      controller: 'CategoriesCtrl'
    })
}]);
