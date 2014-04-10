'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  describe('MyCntrl1', function(){
			var scope = {}, ctrl;
			beforeEach(module('myApp.controllers'));
			beforeEach(inject(function($controller) {
					scope = {};
					ctrl = $controller('MyCtrl1', {$scope: scope} )
					}));

		it('should exist', inject(function() {
			expect(ctrl).not.toBe(undefined);
			//spec body
		}));

		it('should exist car property', inject(function() {
			expect(scope.car).not.toBe(undefined);
			//spec body
		}));
		it('should exist car make property', inject(function() {
			expect(scope.car.make).not.toBe(undefined);
		}));
		it('should exist car model property', inject(function() {
			expect(scope.car.model).not.toBe(undefined);
		}));
		it('should exist car year property', inject(function() {
			expect(scope.car.year).not.toBe(undefined);
		}));
		it('should exist car price property', inject(function() {
			expect(scope.car.price).not.toBe(undefined);
		}));
		it('should exist car make Honda', inject(function() {
			expect(scope.car.make).toEqual('Honda');
		}));
		it('should exist car model Civic', inject(function() {
			expect(scope.car.model).toEqual('Civic');
		}));
		});
		
 	 describe('MyCtrl2', function(){
			var scope = {}, ctrl;
			beforeEach(module('myApp.controllers'));
			beforeEach(inject(function($controller) {
					scope = {};
					ctrl = $controller('MyCtrl2', {$scope: scope} )
					}));

		it('should exist', inject(function() {
			expect(ctrl).not.toBe(undefined);
		}));
		
	  it('should exist car property', inject(function() {
			expect(scope.cars).not.toBe(undefined);
		}));
		it('should contain 4 cars', inject(function() {
			expect(scope.cars.length).toBe(4);
		}));
		it('should add new car', inject(function() {
		  scope.cars.push({make: 'Honda',model: "Civic", year: 2014,price: 15000}) ;
			expect(scope.cars.length).toBe(5);
		}));
		it('should exist car model Civic', inject(function() {
			expect(scope.cars[1].make).toEqual('Toyota');
		}));
		
	});
		
});