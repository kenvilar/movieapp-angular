'use strict';

var app = angular
			.module('kenMovieDb.catalog', [
				'ui.bootstrap',
			]);

app.controller('CatalogCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.currentPage = 1;
	$scope.pageSize = 12;

	$http.get('json/movies.json')
		.success((data) => {
			$scope.movieList = data;
		});
}]);
