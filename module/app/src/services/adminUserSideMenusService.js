(function() {
    'use strict';

	app.factory('adminUserSideMenu', adminUserSideMenu);

		function adminUserSideMenu() {
			// Make Admin Menu
		
			var _menuHtml = '';
			
			var _adminMenus = [
			   { header: 'Definições de Usuários'}, 
			   { header: 'Aplicativos'} 
			];

			var _makeMenu = function () {
				_menuHtml += '<ct-menus>';
				_adminMenus.forEach( function(element) {
					_menuHtml += '<ct-menu-header title="' + element.headers + '"></ct-menu-header>';
				});
				_menuHtml += '</ct-menus>';
				return _menuHtml;
			};

			var _adminSideMenu = function() {
				return _makeMenu();		
			};

			return {
				adminSideMenu: _adminSideMenu,
			};	

		};


})();