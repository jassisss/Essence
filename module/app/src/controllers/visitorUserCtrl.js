(function() {
    'use strict';

	app.controller('visitorUserCtrl', [ '$scope', '$mdSidenav', '$location', 

	function ($scope, $mdSidenav, $location) {
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

	  // /**
	  //  * Select the current avatars
	  //  * @param menuId
	  //  */
	  // function selectUser ( user ) {
	  //   self.selected = angular.isNumber(user) ? $scope.users[user] : user;
	  // };		


	}]);

})();



