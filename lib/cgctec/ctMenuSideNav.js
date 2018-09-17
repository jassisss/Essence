(function() {
    'use strict';

    var cgc = angular.module("ctMenuSideNav",[]);

    cgc.run(function($templateCache) {
        $templateCache.put('view/ctMenu.html', '<md-button class="ct-menu-title-button layout-row flex" layout="row"><div flex="" layout="row" ng-click="open()" class="ct-menu-title layout-row flex md-ink-ripple">{{title | uppercase}}<span flex="" class="flex"></span><span aria-hidden="true" class="ct-toggle-icon" ng-class="{'+ 'toggled' + ' : isOpened}" style=""><md-icon class="ct-icon" md-svg-icon="arrow" role="img" aria-label="arrow"></md-icon></span><span class="md-visually-hidden ng-binding ng-scope">Toggle expanded</span><div class="md-ripple-container" style=""></div></div></md-button><ul id="ct-menu-content" class="ct-menu-content ct-animate-slide ng-hide"  ng-show="isOpened" ng-transclude></ul>');
    });

    cgc.run(function($templateCache) {
        $templateCache.put('view/ctMenuLink.html', '<md-button class="ct-menu-title-link layout-row flex" href="{{hreflink}}" layout="row"><div flex="" layout="row" class="ct-menu-title layout-row flex d-ink-ripple">{{titlelink | uppercase}}<span class="md-visually-hidden ng-binding ng-scope">Toggle expanded</span><div class="md-ripple-container" style=""></div></div></md-button>');
    });

    cgc.run(function($templateCache) {
        $templateCache.put('view/ctMenuContent.html', '<menu-link class="ct-menu-item layout-row flex" style="" title="{{item}}"><a class="ct-menu-link layout-row flex" ng-class="{'+ 'parentActive' + ' : isSectionSelected(section)}" href="{{href}}" style="">{{item}}</a></menu-link>');
    });

    cgc.run(function($templateCache) {
        $templateCache.put('view/ctMenuheader.html', '<div class="ct-menu-title-header" layout="row"><div flex="" layout="row" class="ct-menu-title-header layout-row flex md-ink-ripple">{{title}}</div></div><ul class="ct-menu-header-content" ng-transclude></ul>');
    });

    cgc.directive("ctMenus", 
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

    cgc.directive("ctMenu", 

        function () {
            return {
                templateUrl: 'view/ctMenu.html',
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

    cgc.directive("ctMenuLink", ['$location',  

        function ($location) {
            return {
                templateUrl: 'view/ctMenuLink.html',
                replace: false,
                rstrict: 'E',
                scope: {
                    titlelink: "@",
                    hreflink: "@"
                },
                link: function (scope, element, attrs) {
                    scope.goTo = function (link) {
                        console.log(link);
                        $location.path(link); 
                    };
                }
            };
        }]
    );

    cgc.directive("ctMenuContent", 

        function () {
            return {
                templateUrl: 'view/ctMenuContent.html',
                replace: true,
                rstrict: 'E',
                scope: {
                    item: "@",
                    href: "@"
                }
            };
    });

    cgc.directive("ctMenuHeader", 

        function () {
            return {
                templateUrl: 'view/ctMenuheader.html',
                transclude: true,
                rstrict: 'E',
                scope: {
                    title: "@",
                }
            };
    });


})();