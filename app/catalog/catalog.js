'use strict';

var app = angular
			.module('kenMovieDb.catalog', [
				'ui.bootstrap',
			]);

app.controller('CatalogCtrl', ['$scope', 'movieAPIservice', function($scope, movieAPIservice) {

	$scope.currentPage = 1;
	$scope.pageSize = 12;

	movieAPIservice.getMovies()
		.success((data) => {
			$scope.movieList = data;
		});
}]);
