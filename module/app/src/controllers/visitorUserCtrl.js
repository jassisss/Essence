(function() {
    'use strict';

	app.controller('visitorUserCtrl', visitorUserCtrl) 

	function visitorUserCtrl($scope, $mdSidenav, $location) {
		// *********************************
		// Internal methods
		// *********************************

		$scope.logout = function() {
			$scope.changeShowLogin(true);
			$scope.changeShowAdmin(false);
			$scope.changeShowVisitor(false);
		}

		/**
		* Hide or Show the 'left' sideNav area
		*/

		$scope.toggleLeft = buildToggler('left');

		function buildToggler(componentId) {
		  return function() {
		    $mdSidenav(componentId).toggle();
			}
		};

		function toggleUsersList() {
		$mdSidenav('left').toggle();
		};

	};

	visitorUserCtrl.$inject = ['$scope', '$mdSidenav', '$location'];

})();



