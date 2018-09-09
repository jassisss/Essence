(function() {
	'use strict';

	app.controller('appCtrl', ['$scope', '$mdDialog', '$location',

		function($scope, $mdDialog, $location){

			document.addEventListener('touchmove', {passive: true});
			$scope.message = "Hello World!";
			$scope.ano = new Date();
			$scope.loginNomeCtrl = "Formulário de Login";

			$scope.registerDialog = function (ev) {
				console.log(ev);
			};

			$scope.gotoView = function (view) {
				$location.path("/listUsers");
			};


			$scope.showLoginDialog = function(ev) {
			  $mdDialog.show({
			    controller: DialogController,
			    templateUrl: '../../module/app/view/app/loginBsModal.html',
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
		
	}])

})()