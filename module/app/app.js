var app = angular.module("essence",["ngMessages", "ngRoute", "ngMaterial"]);

	app.run(function($rootScope) {
		// Select User
		$rootScope.idUserSelected = 0;
		$rootScope.changeIdUserSelected = function(id) {
			$rootScope.idUserSelected = id;
  		};

		// Show Login Section
	    $rootScope.showLogin = true;
		$rootScope.changeShowLogin = function(status) {
			$rootScope.showLogin = status;
			return;
  		};
		// Show Admin Section
	    $rootScope.showAdmin = false;
		$rootScope.changeShowAdmin = function(status) {
			$rootScope.showAdmin = status;
			return;
  		};
		// Show Login Section
	    $rootScope.showVisitor = false;
		$rootScope.changeShowVisitor = function(status) {
			$rootScope.showVisitor = status;
			return;
  		};
		// Loged User
	    $rootScope.logedUser = [];
		$rootScope.changeLogedUser = function(user) {
			$rootScope.logedUser = user;
			return;
  		};

	});
