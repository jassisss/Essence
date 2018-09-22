(function() {
    'use strict';

	app.controller('updateUserCtrl', updateUserCtrl);

		function updateUserCtrl($scope, $location, formatDate, usersApi, user, types) {

			$scope.listUsersNameCtrl = "Lista de Usuários";
			$scope.updateUsersNameCtrl = "Editar Usuário";

			$scope.user = user.data;
			$scope.types = types.data;

			$scope.reloadUpdateUser = function () {
				$scope.updateUserForm.$setPristine();
				$location.path("/reloadUpdateUser/" + $scope.idUserSelected);
			};

			var userIdUpdate = $scope.idUserSelected;

			$scope.updateUser = function (user) {
				user.creationDate = formatDate.generate($scope.user.creationDate);
				user.modifyDate = formatDate.generate(new Date());
				usersApi.updateUser(user.id, user).then(function onSuccess(response) {
					$scope.updateUserForm.$setPristine();
					$location.path("/listUsers");
				});
			};

		};

		updateUserCtrl.$inject = ['$scope', '$location', 'formatDate', 'usersApi', 'user', 'types'];

})();