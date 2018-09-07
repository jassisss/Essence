(function() {
    'use strict';

	app.factory('usersApi', function($http, config) {

		var _loginUser = function(user) {
			return $http.post(config.baseUrl + "/login", user);		
		};

		var _getUsers = function() {
			return $http.get(config.baseUrl + "/users");		
		};

		var _getUser = function(id) {
			return $http.get(config.baseUrl + "/users/" + id);		
		};

		var _deleteUser = function(id) {
			return $http.get(config.baseUrl + "/users/delete/" + id);		
		};

		var _saveUser = function(user) {
			return $http.post(config.baseUrl + "/users", user);		
		};

		var _updateUser = function(id, user) {
			return $http.post(config.baseUrl + "/users/add/" + id, user);		
		};

		var _getTypes = function() {
			return $http.get(config.baseUrl + "/types");		
		};

		return {
			loginUser: _loginUser,
			getUsers: _getUsers,
			getUser: _getUser,
			saveUser: _saveUser,
			deleteUser: _deleteUser,
			updateUser: _updateUser,
			getTypes: _getTypes,
		};	

	});

})();