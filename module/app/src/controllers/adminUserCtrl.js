(function() {
    'use strict';

	app.controller('adminUserCtrl', [ '$scope', '$mdSidenav', '$location', 

    function ($scope, $mdSidenav, $location) {
	  // *********************************
	  // Internal methods
	  // *********************************
	  // 
	  
	  $scope.logout = function() {
	  	$location.path("/login");
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

	  // /**
	  //  * Select the current avatars
	  //  * @param menuId
	  //  */
	  // function selectUser ( user ) {
	  //   self.selected = angular.isNumber(user) ? $scope.users[user] : user;
	  // };		


	}]);

})();