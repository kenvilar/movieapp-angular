'use strict';

angular
	.module('kenMovieDb.service', [])
	.factory('movieAPIservice', ['$http', function($http) {
		var movieAPI = {};
		movieAPI.getMovies = () => {
			return $http.get('json/movies.json')
		};

		return movieAPI;
	}]);
