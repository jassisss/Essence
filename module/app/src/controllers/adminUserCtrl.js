(function() {
    'use strict';

	app.controller('adminUserCtrl', [ '$scope', '$mdSidenav', '$location', 

    function ($scope, $mdSidenav, $location) {
	  // *********************************
	  // Internal methods
	  // *********************************
	  // 
	  
	  $scope.logout = function() {
	  	$scope.changeShowLogin(true);
	  	$scope.changeShowAdmin(false);
	  	$scope.changeShowVisitor(false);
	    $location.path("/");
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


	}]);

})();