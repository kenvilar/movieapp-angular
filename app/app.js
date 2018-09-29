'use strict';

angular
	.module('kenMovieDb', [
		'ngRoute',
		'kenMovieDb.catalog',
		'kenMovieDb.genre',
		'kenMovieDb.movie',
		'kenMovieDb.paginate_filter',
		'kenMovieDb.routesConfig',
		'kenMovieDb.service',
	]);
