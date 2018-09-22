(function() {
    'use strict';

	app.controller('registerCtrl', registerCtrl);
		
		function registerCtrl($scope, $location, formatDate, usersApi, $mdDialog) {

			$scope.registerNomeCtrl = "Formulário de Registro";

			$scope.registerPasswordChanged = function () {

				if ($scope.register.password !== $scope.newRegisterPassword) {
					$scope.newRegisterPassword = '';
				};

			};

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
				user.creationDate = formatDate.generate(new Date());
				user.modifyDate = formatDate.generate(new Date());
				user.type_id = 2;
				console.log(user);
				usersApi.addUser(user).then(function onSuccess(response) {
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
	};

	registerCtrl.$inject = ['$scope', '$location', 'formatDate', 'usersApi', '$mdDialog'];

})();
