(function() {
    'use strict';

	app.controller('adminUserCtrl', adminUserCtrl); 

    function adminUserCtrl($scope, $mdSidenav, $location, adminUserSideMenu) {
	  // *********************************
	  // Internal methods
	  // *********************************
	  // 
	  
		$scope.logout = function() {
			$scope.changeShowLogin(true);
			$scope.changeShowAdmin(false);
			$scope.changeShowVisitor(false);
			$location.path("/");
		};


		var menus = adminUserSideMenu.adminSideMenu();

		document.getElementById("adminMenu").innerHTML = menus;

		/**
		* Hide or Show the 'left' sideNav area
		*/
		$scope.toggleLeft = buildToggler('left');

		function buildToggler(componentId) {
			return function() {
				$mdSidenav(componentId).toggle();
			};
		}

	};
	
	adminUserCtrl.$inject = [ '$scope', '$mdSidenav', '$location', 'adminUserSideMenu'];


})();