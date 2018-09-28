'use strict';

angular
	.module('kenMovieDb.paginate_filter', [])
	.filter('paginate', function() {
		return function(arr, currentPage, pageSize) {
			var res;
			try {
				res = arr.slice((currentPage - 1) * pageSize, currentPage * pageSize);
			} catch (e) {
				res = arr;
			}

			return res;
		}
	});
