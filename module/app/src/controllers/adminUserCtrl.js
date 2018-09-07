(function() {
    'use strict';

	app.controller('adminUserCtrl', [ '$scope', '$mdSidenav', 

    function ($scope, $mdSidenav) {
	  // *********************************
	  // Internal methods
	  // *********************************

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