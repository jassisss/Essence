(function () {

	'use strict';

	app.config(['$mdThemingProvider', function($mdThemingProvider) {

    // Configure a dark theme with primary foreground grey

    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('grey')
      .accentPalette('grey')
      .dark();


    }]);

})()