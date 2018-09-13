(function () {

  'use strict';

  app.animation('.slide', [function() {
      return {
        enter: function(element, doneFn) {
          jQuery(element).slideIn(2000, doneFn);
        }
    }

  }]);

})()