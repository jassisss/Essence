(function() {
    'use strict';

	app.controller('reloadUpdateUserCtrl', reloadUpdateUserCtrl);  

	function reloadUpdateUserCtrl ($scope, $window) {

	    $window.location.href = '#/updateUser/' + $scope.idUserSelected;

	};

	reloadUpdateUserCtrl.$inject = ['$scope', '$window'];

})();