(function() {
    'use strict';

	app.controller('deleteUserCtrl', function($scope, $location, usersApi) {

		$scope.listUsersNameCtrl = "Lista de Usuários";
		$scope.deleteUsersNameCtrl = "Excluir Usuário";


		$scope.user = [];

		var loadUser = function () {
			usersApi.getUser($scope.idUserSelected).then(function onSuccess(response) {
				$scope.user = response.data;
			});
		};

		$scope.deleteUser = function () {
			usersApi.deleteUser($scope.idUserSelected).then(function onSuccess(response) {
				$location.path("/listUsers");
			});
		};

		loadUser();

	});

})();