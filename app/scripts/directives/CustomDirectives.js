angular.module('atmDispenseApp')
	.directive('numeric', function () {
		var numericDDO = {
			restrict: 'A',
			require: 'ngModel',
			link: function (scope, elem, attr, ngModelCtrl) {
	            function getTextValue(val) {
	                    var transformedInput = val && val.replace(/[^0-9]/g, '') || "";

	                    if (transformedInput !== val) {
	                        ngModelCtrl.$setViewValue(transformedInput);
	                        ngModelCtrl.$render();
	                    }
	                    return transformedInput;
	                return undefined;
	            }            
	            ngModelCtrl.$parsers.push(getTextValue);
        	}
		};

		return numericDDO;
		
	});