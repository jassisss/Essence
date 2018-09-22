(function() {
    'use strict';

	app.controller('deleteUserCtrl', deleteUserCtrl);

		function deleteUserCtrl($scope, $location, usersApi, users, types) {

			$scope.listUsersNameCtrl = "Lista de Usuários";
			$scope.deleteUsersNameCtrl = "Excluir Usuário";

			$scope.users = users.data;
			$scope.types = types.data;

			$scope.user = [];

			$scope.users.forEach( function(user) {
				if (user.id == $scope.idUserSelected) {
					$scope.types.forEach( function(type) {
						if (user.type_id === type.id){
							user.typeName = type.name;
							$scope.user.name = user.name;
							$scope.user.email = user.email;
							$scope.user.typeName = type.name;
						};
					});
				};
			});

			$scope.deleteUser = function () {
				usersApi.deleteUser($scope.idUserSelected).then(function onSuccess(response) {
					$location.path("/listUsers");
				});
			};

		};

		deleteUserCtrl.$inject = ['$scope', '$location', 'usersApi', 'users', 'types'];

})();