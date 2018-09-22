(function() {
    'use strict';

    app.directive("confirmPassword", confirmPassword);

    function confirmPassword($filter) {
        return {
            require: "ngModel",
            scope: {
                confirmPassword: '='
            },
            link: function (scope, element, attrs, ctrl) {

            	var _isValid = true;

                var _formatInput = function (data) {
                    return data;
                };

                element.bind("keyup", function () {
                	if (scope.confirmPassword) {
	            	    var _isValid = (ctrl.$viewValue === scope.confirmPassword);
	            		ctrl.$setValidity('confirm', _isValid);                    
	            		ctrl.$setViewValue(_formatInput(ctrl.$viewValue));
	                    ctrl.$render();
                	}
                });

                ctrl.$parsers.push(function (value) {
                	if (_isValid){
                        return value; 
                	}
                });

            }
        };
    }

})();
