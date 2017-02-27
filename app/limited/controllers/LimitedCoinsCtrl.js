angular.module('atmDispenseApp')
  .controller('LimitedCoinsCtrl', ["$scope", function ($scope) {
  	var vm = this;
    
    vm.displayString = "Limited Coins Page";
    vm.isValidated = false;
    vm.isFormValid = false;
    vm.isAmountExceeds = false;

    vm.submitAmount = function(amount) {

    	if(vm.unlimitedCoinsForm.$valid) {
    		vm.isFormValid = false;
    		vm.isValidated = true;
	    	vm.totalAmount = amount && amount || null;
	    	vm.currencyDenomArray = [100, 50, 20, 10, 5, 2, 1]; //500, 1000
	    	vm.defaultAvailableCurrency = [11, 24, 0, 99, 200, 11, 23];
	    	vm.availableCurrencyArray = [11, 24, 0, 99, 200, 11, 23];
	    	vm.count = [0, 0, 0, 0, 0, 0, 0];
	    	var totCurr = 0;
	    	var currencyVal = null;
	        
	        for (var i = 0; i < vm.currencyDenomArray.length; i++) {
                totCurr = totCurr + vm.currencyDenomArray[i] * vm.availableCurrencyArray[i];
            }

            var currencyDenomArrayLength = vm.currencyDenomArray.length;
            if(parseInt(amount) <= totCurr) {
            	vm.isValidated = true;
            	vm.isAmountExceeds = false;
            	for (var ic=0; ic<=currencyDenomArrayLength; ic++) {
            		if(vm.currencyDenomArray[ic] <= amount) {
            			var note = parseInt(amount / vm.currencyDenomArray[ic]);
            			if (vm.availableCurrencyArray[ic] > 0) {
	                        vm.count[ic] = (note >= vm.availableCurrencyArray[ic]) ? vm.availableCurrencyArray[ic] : note;
	                        vm.availableCurrencyArray[ic] = (note >= vm.availableCurrencyArray[ic]	) ? 0 : vm.availableCurrencyArray[ic] - note;
	                        totCurr = totCurr - (vm.count[ic] * vm.currencyDenomArray[ic]);
	                        amount = amount - (vm.count[ic] * vm.currencyDenomArray[ic]);
                    	}
            		}
            	}
            } else {
            	vm.isAmountExceeds = true;
            	//alert();
            	vm.maxAllowedAmount = parseInt(totCurr);
            	vm.isValidated = false;
            	return;
            }

            /*for(var iCurrency in vm.currencyDenomArray) {
	        	currencyVal = parseInt(amount/vm.currencyDenomArray[iCurrency]);
	        	vm[vm.currencyDenomArray[iCurrency]] = currencyVal;
	        	amount = amount%vm.currencyDenomArray[iCurrency];
	        }*/

            //console.log(vm.currencyDenomArray+"       "+vm.availableCurrencyArray+"  "+vm.count);
	        
    	} else {
    		vm.isFormValid = true;
    		vm.isValidated = false;
    	}
    	
    };

    vm.clearAmount = function() {
    	vm.amount = null;
    	vm.isValidated = false;
    	vm.currencyDenomArray = [100, 50, 20, 10, 5, 2, 1]; //500, 1000
    	vm.defaultAvailableCurrency = [11, 24, 0, 99, 200, 11, 23];
    	vm.availableCurrencyArray = [11, 24, 0, 99, 200, 11, 23];
    	vm.count = [0, 0, 0, 0, 0, 0, 0];
    	totCurr = 0;
    };
  }]);