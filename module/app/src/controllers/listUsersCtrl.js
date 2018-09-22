(function() {
    'use strict';

	app.controller('listUsersCtrl', listUsersCtrl);

		function listUsersCtrl($scope, $location, users, types) {

			$scope.listUsersNameCtrl = "Lista de Usuários";

			$scope.users = users.data;
			$scope.types = types.data;

			$scope.users.forEach( function(user) {
				$scope.types.forEach( function(type) {
					if (user.type_id === type.id){
						user.typeName = type.name;
					};
				});
			});

			$scope.mostra = false;

			$scope.startAdmin = function () {
				$scope.changeShowLogin(false);
				$scope.changeShowAdmin(true);
				$scope.changeShowVisitor(false);
				$location.path("/");
			};

			$scope.reloadUser = function() {
				$scope.mostra = false;
				$location.path("/reloadListUsers");
			};

			$scope.pegar = function(data) {
		        $scope.mostra = true;
		        $scope.changeIdUserSelected(data.id);
		    }

		};

		listUsersCtrl.$inject = ['$scope', '$location', 'users', 'types'];

})();