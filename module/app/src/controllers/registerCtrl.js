(function() {
    'use strict';

	app.controller('registerCtrl', ['$scope', '$location', 'idGenerator', '$http', 'usersApi', '$mdDialog',
		
		function ($scope, $location, idGenerator, $http, usersApi, $mdDialog) {

		$scope.registerNomeCtrl = "Formulário de Registro";

		$scope.registerPasswordChanged = function () {

			if ($scope.register.password !== $scope.newRegisterPassword) {
				$scope.newRegisterPassword = '';
			};

		};


		$scope.users = [];
		$scope.confirmPassword = '';
		$scope.userExit = false;
		$scope.emailExist = '';
		
		var loadUsers = function () {
			$http.get("http://localhost:3412/users").then(function onSuccess(response) {
				$scope.users = response.data;
			}).catch(function onError(response) {
				$scope.message = "Aconteceu um problema: " + data;
			});
		};

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
				$mdDialog.hide();
				$scope.registerForm.$setPristine();
				$location.path("/");
			}).catch(function onError(response) {
				$scope.userExit = true;
				$scope.emailExist = user.email;
				delete $scope.register;
				$scope.confirmPassword = '';
				$scope.registerForm.$setPristine();
			});
		};

		loadUsers();

	}]);

})();
