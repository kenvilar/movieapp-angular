'use strict';

var app = angular.module('kenMovieDb.routesConfig', []);
app.config([
	'$routeProvider', function($routeProvider) {
		var routeProvider = $routeProvider;
		routeProvider.when('/', {
			templateUrl: 'catalog/catalog.html',
			controller: 'CatalogCtrl'
		})
		.when('/movie/:id', {
			templateUrl: 'movie/movie.html',
			controller: 'MovieCtrl',
		})
		.when('/genre/:genreName', {
			templateUrl: 'catalog/catalog.html',
			controller: 'GenreCtrl',
		})
		.otherwise({
			redirectTo: '/',
		});
	},
]);
