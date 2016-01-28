angular.module("kb")

.controller('ArticlesCtrl', ['$scope','$http', function($scope, $http){
	$http.get('/articles').success(function(data){
		$scope.articles = data;
	});
}])

.controller('ArticlesCategoriesCtrl', ['$scope','$http', '$routeParams', function($scope, $http, $routeParams){
	$http.get('/articles/category/'+$routeParams.category).success(function(data){
		$scope.cat_articles = data;
		$scope.category = $routeParams.category;
	});
}])
