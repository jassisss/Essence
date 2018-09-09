(function() {
    'use strict';

	app.controller('addUserCtrl', function($scope, $location, idGenerator, users, types, usersApi) {

		$scope.listUsersNameCtrl = "Lista de Usuários";
		$scope.addUsersNameCtrl = "Adicionar Usuário";


		$scope.users = users.data;
		$scope.types = types.data;
		$scope.confirmPassword = '';
		$scope.userExit = false;
		$scope.emailExist = '';

		$scope.reloadAddUser = function () {
			delete $scope.user;
			$scope.confirmPassword = '';
			$scope.addUserForm.$setPristine();
			$location.path("/addUser");
			$scope.userExit = false;
		};

		$scope.userPasswordChanged = function () {

			if ($scope.users.password !== $scope.confirmPassword) {
				$scope.confirmPassword = '';
			};

		};

		$scope.addUser = function (user) {
			user.idUser = idGenerator.generate($scope.users);
			user.creationDate= new Date();
			user.modifyDate= new Date();
			usersApi.saveUser(user).then(function onSuccess(response) {
				delete $scope.user;
				$scope.addUserForm.$setPristine();
				$location.path("/listUsers");
			}).catch(function onError(response) {
				$scope.userExit = true;
				$scope.emailExist = user.email;
				delete $scope.user;
				$scope.confirmPassword = '';
				$scope.addUserForm.$setPristine();
				$location.path("/addUser");
			});
		};

	});

})();