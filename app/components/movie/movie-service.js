'use strict';

angular
	.module('kenMovieDb.service', [])
	.factory('movieAPIservice', ['$http', function($http) {
		var movieAPI = {};

		movieAPI.getMovies = () => {
			return $http.get('json/movies.json')
		};

		movieAPI.getGenres = () => {
			return $http.get('json/genres.json')
		};

		return movieAPI;
	}]);
