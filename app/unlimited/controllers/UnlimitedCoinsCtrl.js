angular.module('atmDispenseApp')
  .controller('UnlimitedCoinsCtrl', ["$scope", function ($scope) {
  	var vm = this;
    
    vm.displayString = "Unlimited Coins Page";
    vm.isValidated = false;
    vm.isFormValid = false,

    vm.submitAmount = function(amount) {

    	if(vm.unlimitedCoinsForm.$valid) {
    		vm.isFormValid = false;
    		vm.isValidated = true;
	    	vm.totalAmount = amount && amount || null;
	    	vm.currencyDenomArray = [100, 50, 20, 10, 5, 2, 1]; //1000, 500
	    	var currencyVal = null;
	             
	        for(var iCurrency in vm.currencyDenomArray) {
	        	currencyVal = parseInt(amount/vm.currencyDenomArray[iCurrency]);
	        	vm[vm.currencyDenomArray[iCurrency]] = currencyVal;
	        	//console.log(vm[currencyDenomArray[iCurrency]]);
	        	amount = amount%vm.currencyDenomArray[iCurrency];
	        	//console.log(currencyVal+"        "+amount);
	        }
    	} else {
    		vm.isFormValid = true;
    		vm.isValidated = false;
    	}
    	
    };

    vm.clearAmount = function() {
    	vm.amount = null;
    };
  }]);