(function() {
    'use strict';

	angular.module("essence").controller('forgotCtrl', function ($scope) {

		$scope.forgotNomeCtrl = "Recuperação de senha";

		$scope.resetForgotForm = function (email) {
			delete $scope.forgot;
			$scope.forgotForm.$setPristine();

		};
	});

})();