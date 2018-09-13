(function() {
    'use strict';

    app.directive("ctMenus", 
        function () {
            return {
                controller: function ($scope, $element, $attrs) {
                    var menus_local = [];

                    this.registerMenus = function (scope_menu) {
                        menus_local.push(scope_menu);
                    };

                    this.closeAll = function () {
                        menus_local.forEach(function (menu_local) {
                            menu_local.isOpened = false;
                        });
                    }
                }
            };        
    });

    app.directive("ctMenu", 

        function () {
            return {
                templateUrl: '../module/app/view/app/ctMenu.html',
                transclude: true,
                replace: false,
                rstrict: 'E',
                scope: {
                    title: "@"
                },
                require: "^ctMenus",
                link: function (scope, element, attrs, ctrl) {
                    var _isOpen = false;
                    ctrl.registerMenus(scope);
                    scope.open = function () {
                        if (scope.isOpened) {
                           _isOpen = false; 
                        }else{
                           _isOpen = true;
                        }
                        ctrl.closeAll();
                        scope.isOpened = _isOpen; 
                    };
                }
            };
    });


    app.directive("ctMenuContent", 

        function () {
            return {
                templateUrl: '../module/app/view/app/ctMenuContent.html',
                replace: true,
                rstrict: 'E',
                scope: {
                    item: "@",
                    href: "@"
                }
            };
    });

    app.directive("ctMenuHeader", 

        function () {
            return {
                templateUrl: '../module/app/view/app/ctMenuheader.html',
                transclude: true,
                rstrict: 'E',
                scope: {
                    title: "@",
                }
            };
    });

})();