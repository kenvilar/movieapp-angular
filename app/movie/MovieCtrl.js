'use strict';

var app = angular.module('kenMovieDb.movie', ['ui.bootstrap']);
app.controller('MovieCtrl', [
		'$scope',
		'$filter',
		'movieAPIservice',
		'$routeParams',
		function($scope, $filter, movieAPIservice, $routeParams) {
			$scope.movieId = $routeParams.id;

			movieAPIservice.getMovies()
				.success((data) => {
					$scope.movie = $filter('filter')(data, {
						id: parseInt($scope.movieId)
					}, true)[0];
				});
		}
	]);