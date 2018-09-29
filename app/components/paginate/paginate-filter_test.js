'use strict';

describe('Unit tests: paginate filter', function() {
	beforeEach(module('kenMovieDb.paginate_filter'));

	var elArr = [1, 2, 3, 4, 5, 6, 7];

	it('should return only the elements on second page',
		inject(function(paginateFilter) {
			expect(paginateFilter(elArr, 2, 5).length).toBe(2);
		}));
});
