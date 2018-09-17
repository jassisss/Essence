(function() {
    'use strict';

	app.controller('adminUserCtrl', adminUserCtrl); 

    function adminUserCtrl($scope, $mdSidenav, $location) {
	  // *********************************
	  // Internal methods
	  // *********************************
	  // 
		$scope.adminMenus = [
			{header: 'Usuários',
			 menus:[{name: 'Cadastros', 
			        items: [{name: 'Lista de Usuários', href: '#/listUsers'},
			        		{name: 'Lista de Visitantes', href: '#'}
			               ]
			      	},
			      	{name: 'Módulos', 
			      	 items: [{name: 'Módulo de Usuários', href: '#'},
			      		     {name: 'Módulo de Visitantes', href: '#'}
			      		    ]
			      	}
			      ],
			 menulink: [ 
			     {name: 'Sobre', link: '#'}

			]}, 
			{header: 'Aplicativos', 
			 menus:[{name: 'Configurações', 
			        items: [{name: 'Menus', href: '#'},
			        		{name: 'Temas', href: '#'}
			               ]
			      	},
			      	{name: 'Módulos', 
			      	 items: [{name: 'Módulo de Usuários', href: '#'},
			      		     {name: 'Módulo de Visitantes', href: '#'}
			      		    ]
			      	}
			      ],
			 menulink: [ 
				{name: 'Versão', link: '#'}
			]}
		];
	  
		$scope.logout = function() {
			$scope.changeShowLogin(true);
			$scope.changeShowAdmin(false);
			$scope.changeShowVisitor(false);
			$location.path("/");
		};


		// var menus = adminUserSideMenu.adminSideMenu();
		// var mmm = '<ct-menus><ct-menu-header title="Definições de Usuários"></ct-menu-header></ct-menus>';

		// document.getElementById("adminMenu").innerHTML = mmm;

		/**
		* Hide or Show the 'left' sideNav area
		*/
		$scope.toggleLeft = buildToggler('left');

		function buildToggler(componentId) {
			return function() {
				$mdSidenav(componentId).toggle();
			};
		}

	};
	
	adminUserCtrl.$inject = [ '$scope', '$mdSidenav', '$location' ];


})();