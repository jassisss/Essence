(function() {
    'use strict';

    app.directive("ngLength", ngLength);

    function ngLength($filter) {
        return {
            require: "ngModel",
            scope: {
                ngLength: '='
            },
            link: function (scope, element, attrs, ctrl) {
                var _formatInput = function (date) {

                    return date;
                };

                element.bind("keyup", function () {
                    ctrl.$setViewValue(_formatInput(ctrl.$viewValue));
                    ctrl.$render();
                });

                ctrl.$parsers.push(function (value) {
                    if (value.length >= scope.ngLength.length) {
                        var isValid = (value === scope.ngLength);
                        return ctrl.$setValidity('confirm', isValid);;
                    }
                });

            }
        };
    }
})();
