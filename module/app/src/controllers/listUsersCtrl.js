(function() {
    'use strict';

	app.controller('listUsersCtrl', listUsersCtrl);

		function listUsersCtrl($scope, $location, users) {

			$scope.listUsersNameCtrl = "Lista de Usuários";

			$scope.users = users.data;

			$scope.mostra = false;

			$scope.startAdmin = function () {
				$scope.changeShowLogin(false);
				$scope.changeShowAdmin(true);
				$scope.changeShowVisitor(false);
				$location.path("/");
			};

			$scope.reloadUser = function() {
				$scope.mostra = false;
				$location.path("/reloadListUsers");
			};

			$scope.pegar = function(data) {
		        $scope.mostra = true;
		        $scope.changeIdUserSelected(data.idUser);
		    }

		};

		listUsersCtrl.$inject = ['$scope', '$location', 'users'];

})();