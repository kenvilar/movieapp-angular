'use strict';

describe('E2E tests: movieDB', function() {
	describe('catalog', function() {
		var mytest;

		beforeEach(function() {
			mytest = browser;
			mytest.get('/');
		});

		it('should render to catalog view when user navigates to /', function() {
			expect(mytest.getCurrentUrl()).toMatch('\/#');
		});

		it('should take you to the genre catalog when you click a link on the genre list', function() {
			var link = element(by.css('.list-group-item:nth-child(2)'));
			link.click();
			expect(mytest.getCurrentUrl()).toMatch('\/genre\/Action');
		});
	});

	describe('movie', function() {
		var mytest;

		beforeEach(function() {
			mytest = browser;
			browser.get('/#/movie/222935');
		});

		it('should render the movies details page', function() {
			var elem = by.css('.moviedetails');
			expect(mytest.isElementPresent(elem)).toBe(true);
		});

		it('should take you back to the movie gallery when you click Return to Catalog', function() {
			var link = element(by.css('.return-btn'));
			link.click();
			expect(mytest.getCurrentUrl()).toMatch('\/#');
		});
	});
});
