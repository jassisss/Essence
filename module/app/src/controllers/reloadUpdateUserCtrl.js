(function() {
    'use strict';

	app.controller('reloadUpdateUserCtrl', ['$scope', '$window',  

	function reloadUpdateUserCtrl ($scope, $window) {
	    $window.location.href = '#/updateUser/' + $scope.idUserSelected;

	}]);

})();