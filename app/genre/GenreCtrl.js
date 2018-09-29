'use strict';

var app = angular
			.module('kenMovieDb.genre', [
				'ui.bootstrap',
			]);

app.controller('GenreCtrl', [
		'$scope',
		'movieAPIservice',
		'$routeParams',
		'$filter',
		function($scope, movieAPIservice, $routeParams, $filter) {
			$scope.currentPage = 1;
			$scope.pageSize = 12;
			$scope.genreName = $routeParams.genreName;
			$scope.pageTitle = $routeParams.genreName + ' movies';

			movieAPIservice.getMovies()
				.success((data) => {
					$scope.movieList = $filter('filter')(data, function(movie) {
						return $filter('filter')(movie.genres, {
							name: $routeParams.genreName
						}).length;
					});
				});

			movieAPIservice.getGenres()
				.success((data) => {
					$scope.genreList = data;
				});
		}]);
