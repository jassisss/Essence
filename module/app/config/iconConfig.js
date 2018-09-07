(function () {

	'use strict';

	app.config(['$mdIconProvider', function($mdIconProvider) {
    $mdIconProvider
      .defaultIconSet("../../../assets/img/svg/app/Essence_Logo02.svg", 48)
      .icon("logo1", "../../../assets/img/svg/app/Essence_Logo01.svg", 24)
      .icon("logo2", "../../../assets/img/svg/app/Essence_Logo01.svg", 48)
      .icon("logo3", "../../../assets/img/svg/app/Essence_Logo02.svg", 48)
      .icon("menu", "../../../assets/img/svg/menu.svg", 24)
      .icon("close", "../../../assets/img/svg/solid/times.svg", 24)
      .icon("check", "../../../assets/img/svg/solid/check.svg", 24)
      .icon("redo", "../../../assets/img/svg/solid/redo.svg", 24)
      .icon("share", "../../img/svg/share.svg", 24)
      .icon("google_plus", "../../img/svg/google_plus.svg", 24)
      .icon("hangouts", "../../img/svg/hangouts.svg", 24)
      .icon("twitter", "../../../../../assets/img/svg/twitter.svg", 24)
      .icon("phone", "../../../assets/img/svg/phone.svg", 24)
      .icon("asterisk", "../../../assets/lib/Font-Awesome/advanced-options/raw-svg/solid/asterisk.svg", 24);
  	}]);

})()