'use strict';

var app = angular.module('kenMovieDb.catalog', []);

app.controller('catalogCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('json/movies.json')
		.success((data) => {
			$scope.movieList = data;
		});
}]);
