(function() {
    'use strict';

	app.config(function ($routeProvider) {

		$routeProvider.when("/login", {
			templateUrl: "../view/app/loginBsModal.html",
			controller: "loginCtrl",
		});

		$routeProvider.when("/adminUser", {
			templateUrl: "view/adminUserView.html",
			controller: "adminUserCtrl",
		});

		$routeProvider.when("/visitorUser", {
			templateUrl: "view/visitorUserView.html",
			controller: "loginCtrl",
		});
		
		$routeProvider.when("/register", {
			templateUrl: "view/registerView.html",
			controller: "registerCtrl",
			resolve: {
				users: function(usersApi) {
					return usersApi.getUsers();
				},
			}
		});
		
		$routeProvider.when("/forgot", {
			templateUrl: "view/forgotView.html",
			controller: "forgotCtrl",
		});

		$routeProvider.when("/listUsers", {
			templateUrl: "view/listUsersView.html",
			controller: "listUsersCtrl",
			resolve: {
				users: function(usersApi) {
					return usersApi.getUsers();
				}
			}
		});
		
		$routeProvider.when("/reloadListUsers", {
			templateUrl: "view/listUsersView.html",
			controller: "listUsersCtrl",
			resolve: {
				users: function(usersApi) {
					return usersApi.getUsers();
				}
			},
			redirectTo: "/listUsers"
		});

		$routeProvider.when("/addUser", {
			templateUrl: "view/addUserView.html",
			controller: "addUserCtrl",
			resolve: {
				users: function(usersApi) {
					return usersApi.getUsers();
				},
				types: function(usersApi) {
					return usersApi.getTypes();
				}
			}
		});

		$routeProvider.when("/deleteUser", {
			templateUrl: "view/deleteUserView.html",
			controller: "deleteUserCtrl",
		});

		$routeProvider.when("/updateUser/:id", {
			templateUrl: "view/updateUserView.html",
			controller: "updateUserCtrl",
			resolve: {
				user: function(usersApi, $route) {
					return usersApi.getUser($route.current.params.id);
				},
				users: function(usersApi) {
					return usersApi.getUsers();
				},
				types: function(usersApi) {
					return usersApi.getTypes();
				}
			}
		});

		$routeProvider.when("/reloadUpdateUser/:id", {
			templateUrl: "view/updateUserView.html",
			controller: "reloadUpdateUserCtrl",
			resolve: {
				user: function(usersApi, $route) {
					return usersApi.getUser($route.current.params.id);
				}
			}
		});

		$routeProvider.otherwise({redirectTo: "/login"});

	});

})();