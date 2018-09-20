(function() {
    'use strict';

	app.controller('updateUserCtrl', function($scope, $location, $http, usersApi, user, users, types) {

		$scope.listUsersNameCtrl = "Lista de Usuários";
		$scope.updateUsersNameCtrl = "Editar Usuário";


		$scope.users = users.data;
		$scope.user = user.data;
		$scope.types = types.data;

		$scope.reloadUpdateUser = function () {
			$scope.updateUserForm.$setPristine();
			$location.path("/reloadUpdateUser/" + $scope.idUserSelected);
		};

		var userIdUpdate = $scope.idUserSelected;

		$scope.updateUser = function (user) {
			user.creationDate= $scope.user.creationDate;
			user.modifyDate= new Date();
			usersApi.updateUser(user.id, user).then(function onSuccess(response) {
				$scope.updateUserForm.$setPristine();
				$location.path("/listUsers");
			});
		};

	});

})();