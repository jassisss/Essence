(function() {
    'use strict';

	app.controller('registerCtrl', function ($scope, $location, idGenerator, users, usersApi) {

		$scope.registerNomeCtrl = "Formulário de Registro";

		$scope.registerPasswordChanged = function () {

			if ($scope.register.password !== $scope.newRegisterPassword) {
				$scope.newRegisterPassword = '';
			};

		};


		$scope.users = users.data;
		$scope.confirmPassword = '';
		$scope.userExit = false;
		$scope.emailExist = '';

		$scope.resetRegisterForm = function () {
			delete $scope.register;
			$scope.confirmPassword = '';
			$scope.registerForm.$setPristine();
			$scope.userExit = false;
		};

		$scope.registerPasswordChanged = function () {

			if ($scope.register.password !== $scope.confirmPassword) {
				$scope.confirmPassword = '';
			};

		};

		$scope.registerUser = function (user) {
			user.idUser = idGenerator.generate($scope.users);
			user.creationDate= new Date();
			user.modifyDate= new Date();
			user.type = {'idType': 2, name: 'Visitante', code: 2};
			usersApi.saveUser(user).then(function onSuccess(response) {
				delete $scope.user;
				$scope.registerForm.$setPristine();
				$location.path("/login");
			}).catch(function onError(response) {
				$scope.userExit = true;
				$scope.emailExist = user.email;
				delete $scope.register;
				$scope.confirmPassword = '';
				$scope.registerForm.$setPristine();
			});
		};

	});

})();
