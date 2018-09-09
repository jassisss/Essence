(function() {
    'use strict';

	app.controller('listUsersCtrl', function($scope, $location, users) {

		$scope.listUsersNameCtrl = "Lista de Usuários";

		$scope.users = users.data;

		$scope.mostra = false;

		$scope.reloadUser = function() {
			$scope.mostra = false;
			$location.path("/reloadListUsers");
		};

		$scope.pegar = function(data) {
	        $scope.mostra = true;
	        $scope.changeIdUserSelected(data.idUser);
	    }

	});

})();