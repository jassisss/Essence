var app = angular.module("essence",["ngMessages", "ngRoute", "ngMaterial"]);

	app.run(function($rootScope) {
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

	});
