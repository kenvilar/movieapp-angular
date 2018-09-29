'use strict';

var app = angular
			.module('kenMovieDb.catalog', [
				'ui.bootstrap',
			]);

app.controller('CatalogCtrl', ['$scope', 'movieAPIservice', function($scope, movieAPIservice) {
	$scope.currentPage = 1;
	$scope.pageSize = 12;
	$scope.pageTitle = 'Most Watched This Week';

	movieAPIservice.getMovies()
		.success((data) => {
			$scope.movieList = data;
		});

	movieAPIservice.getGenres()
		.success((data) => {
			$scope.genreList = data;
		});
}]);
