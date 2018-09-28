'use strict';

var app = angular.module('kenMovieDb.movie', ['ui.bootstrap']);
app.controller('MovieCtrl', [
		'$scope',
		'$filter',
		'$http',
		'$routeParams',
		function($scope, $filter, $http, $routeParams) {
			$scope.movieId = $routeParams.id;

			$http.get('json/movies.json')
				.success((data) => {
					$scope.movie = $filter('filter')(data, {
						id: parseInt($scope.movieId)
					}, true)[0];
				});
		}
	]);