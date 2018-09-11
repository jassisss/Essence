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
				$scope.changeLogedUser(response.data);
				delete $scope.login;
				$mdDialog.cancel();
				$scope.userNotExit = false;
				$scope.loginForm.$setPristine();
				if (response.data.type.name === 'Administrador') {
					$scope.changeShowLogin(false);
					$scope.changeShowAdmin(true);
					$scope.changeShowVisitor(false);
					$location.path("/");
				}else{
					$scope.changeShowLogin(false);
					$scope.changeShowAdmin(false);
					$scope.changeShowVisitor(true);
					$location.path("/");
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


		$scope.showLoginDialog = function(ev) {
		  $mdDialog.show({
		    controller: DialogController,
		    templateUrl: '../../module/app/view/app/loginBsModal.html',
		    scope: $scope,
		    preserveScope: true,
		    parent: angular.element(document.body),
		    targetEvent: ev,
		    clickOutsideToClose:true
		  }).then(function(answer) {
		        $scope.status = 'Você disse que a informação era "' + answer + '".';
		      }, function() {
		        $scope.status = 'Você cancelou o diálogo.';
		      });
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

		  $scope.showAdminSection = function ($rootScope) {
		  	console.log('passou 77777');
		  	$rootScope.changeShowAdmin(true);
		  	$rootScope.changeShowLogin(false);
		  	$rootScope.changeShowVisitor(false);
		  	// $scope.showLogin = false;
		  	// $scope.showAdmin = true;
		  	// $scope.showVisitor = false;
		  	// $location.path("/");
		  	console.log('passou de novo');
		  	console.log($scope.showLogin + ' - ' + $scope.showAdmin + ' - ' + $scope.showVisitor);
		  };
		
		}		


	}]);

})();

