(function() {
    'use strict';

	app.controller('loginCtrl', [ '$scope', '$location', 'usersApi',

	function ($scope, $location, usersApi) {
		
		$scope.loginNomeCtrl = "Formulário de Entrada";

		$scope.userNotExit = false;

		$scope.validateUser = function (login) {
			usersApi.loginUser(login).then(function onSuccess(response) {
				delete $scope.login;
				$scope.userNotExit = false;
				$scope.loginForm.$setPristine();
				if (response.data.type.name === 'Administrador') {
					$location.path("/adminUser");
				}else{
					$location.path("/visitorUser");
				}
			}).catch(function onError(response) {
				$scope.userNotExit = true;
				delete $scope.login;
				$scope.loginForm.$setPristine();
			});		

		};	

	}]);

})();

