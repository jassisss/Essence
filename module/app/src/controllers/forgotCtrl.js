(function() {
    'use strict';

	app.controller('forgotCtrl', forgotCtrl);

		function forgotCtrl($scope) {

			$scope.forgotNomeCtrl = "Recuperação de senha";

			$scope.resetForgotForm = function (email) {
				delete $scope.forgot;
				$scope.forgotForm.$setPristine();

			};

		};

		forgotCtrl.$inject = ['$scope'];

})();