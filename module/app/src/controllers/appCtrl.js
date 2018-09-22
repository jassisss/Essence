(function() {
	'use strict';

	app.controller('appCtrl', appCtrl);

		function appCtrl($scope) {

			$scope.ano = new Date();

		};

		appCtrl.$inject = ['$scope'];

})()