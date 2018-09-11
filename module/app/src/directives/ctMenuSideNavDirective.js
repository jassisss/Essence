(function() {
    'use strict';

    app.directive("ctMenus", ctMenus);

    function ctMenus() {
        return {
            controller: function ($scope, $element, $attrs) {
                var menus = [];

                this.registerMenus = function (menu) {
                    menus.push(menu);
                };

                this.closeAll = function () {
                    menus.forEach(function (menu) {
                        menu.isOpened = false;
                    });
                }
            }
        };        
    }

    app.directive("ctMenu", ctMenu);

    function ctMenu() {
        return {
            templateUrl: "../module/app/view/app/ctSideNavMenu.html",
            transclude: true,
            scope: {
                title: "@"
            },
            require: "^ctMenus",
            link: function (scope, element, attrs, ctrl) {
                ctrl.registerMenus(scope);
                scope.open = function () {
                    ctrl.closeAll();
                    scope.isOpened= true;
                };
            }
        };
    }

})();