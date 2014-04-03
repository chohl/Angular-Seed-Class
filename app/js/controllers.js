'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', function($scope) {
		$scope.car = {make: "Honda",
				model: "Civic",
				year: 2014,
				price: 24000
				}

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {
		  $scope.cars = [
				{make: 'Civic',model: "Civic", year: 2014,price: 24000},
				{make: 'Toyota',model: "Yaris", year: 2014,price: 12500},
				{make: 'Ford',model: "Fiat", year: 2009,price: 4000},
				{make: 'Toyota',model: "Camry", year: 2012,price: 18000}
			
		];
  }]);

	
	
	
	
	
	
	
	
	
	
	
	