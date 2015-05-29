var contactCtrl = angular.module('contactCtrl', ['ngAnimate']);

contactCtrl.controller('ListController', ['$scope', '$http', function($scope, $http) {
	$http.get('js/data.json').success(function(data) {
		$scope.contact = data;
		$scope.order = 'name';
	});
}]);

contactCtrl.controller('DetailsController', ['$scope', '$http','$routeParams',function($scope, $http, $routeParams)  {
	$http.get('js/data.json').success(function(data) {
		$scope.contact = data;
		$scope.whichItem = $routeParams.itemId;

		var x = $routeParams.itemId;
		if ( x > 0) {
			$scope.prevItem = Number(x) - 1;
		} else {
			$scope.prevItem = $scope.contact.length - 1;
		}

		if ( x < $scope.contact.length-1) {
			$scope.nextItem = Number(x) + 1;
		} else {
			$scope.nextItem = 0;
		}

	});
}]);

