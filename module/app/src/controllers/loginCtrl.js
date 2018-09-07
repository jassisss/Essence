(function() {
    'use strict';

	app.controller('loginCtrl', [ '$scope', '$location', 'usersApi', '$mdDialog',

	function ($scope, $location, usersApi, $mdDialog) {
		
		$scope.loginNomeCtrl = "Formulário de Entrada";

		$scope.userNotExit = false;

		$scope.resetLoginForm = function () {
			if ($scope.userNotExit) {
				delete $scope.login;
				$scope.userNotExit = false;
				$scope.loginForm.$setPristine();
			};
		};

		$scope.validateUser = function (login) {
			usersApi.loginUser(login).then(function onSuccess(response) {
				delete $scope.login;
				$mdDialog.cancel();
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

		$scope.registerDialog = function (ev) {
			$scope.cancel();
			$scope.showRegisterDialog(ev);
		};
		
		$scope.showRegisterDialog = function(ev) {
		  $mdDialog.show({
		    controller: DialogController,
		    templateUrl: '../../module/app/view/app/registerBsModal.html',
		    parent: angular.element(document.body),
		    targetEvent: ev,
		    clickOutsideToClose:true
		  }).then(function(answer) {
		        $scope.status = 'Você disse que a informação era "' + answer + '".';
		      }, function() {
		        $scope.status = 'Você cancelou o diálogo.';
		      });
		};

		
		$scope.showForgotDialog = function(ev) {
		  $mdDialog.show({
		    controller: DialogController,
		    templateUrl: '../../module/app/view/app/forgotBsModal.html',
		    parent: angular.element(document.body),
		    targetEvent: ev,
		    clickOutsideToClose:true
		  }).then(function(answer) {
		        $scope.status = 'Você disse que a informação era "' + answer + '".';
		      }, function() {
		        $scope.status = 'Você cancelou o diálogo.';
		      });
		};

		function DialogController($scope, $mdDialog) {
		  $scope.hide = function() {
		    $mdDialog.hide();
		  };

		  $scope.cancel = function() {
		    $mdDialog.cancel();
		  };

		  $scope.answer = function(answer) {
		    $mdDialog.hide(answer);
		  };
		}


	}]);

})();

