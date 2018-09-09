(function() {
    'use strict';

	app.config(function ($routeProvider) {

		$routeProvider.when("/login", {
			templateUrl: "../../module/app/view/app/loginView.html",
			controller: "loginCtrl",
		});

		$routeProvider.when("/adminUser", {
			templateUrl: "../../module/app/view/app/userAdminView.html",
			controller: "adminUserCtrl",
		});

		$routeProvider.when("/visitorUser", {
			templateUrl: "../../module/app/view/app/userVisitorView.html",
			controller: "visitorUserCtrl",
		});
		
		$routeProvider.when("/register", {
			templateUrl: "../../module/app/view/app/registerBsModal.html",
			controller: "registerCtrl",
			resolve: {
				users: function(usersApi) {
					return usersApi.getUsers();
				},
			}
		});
		
		$routeProvider.when("/forgot", {
			templateUrl: "../../module/app/view/app/forgotView.html",
			controller: "forgotCtrl",
		});

		$routeProvider.when("/listUsers", {
			templateUrl: "../../module/app/view/app/listUsersView.html",
			controller: "listUsersCtrl",
			resolve: {
				users: function(usersApi) {
					return usersApi.getUsers();
				}
			}
		});
		
		$routeProvider.when("/reloadListUsers", {
			templateUrl: "../../module/app/view/app/listUsersView.html",
			controller: "listUsersCtrl",
			resolve: {
				users: function(usersApi) {
					return usersApi.getUsers();
				}
			},
			redirectTo: "/listUsers"
		});

		$routeProvider.when("/addUser", {
			templateUrl: "../../module/app/view/app/addUserView.html",
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
			templateUrl: "../../module/app/view/app/deleteUserView.html",
			controller: "deleteUserCtrl",
		});

		$routeProvider.when("/updateUser/:id", {
			templateUrl: "../../module/app/view/app/updateUserView.html",
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
			templateUrl: "../../module/app/view/app/updateUserView.html",
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