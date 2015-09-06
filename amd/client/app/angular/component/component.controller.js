(function () {

	'use strict';

	angular.module('app.component')
		.controller('ComponentController', ComponentController);

	ComponentController.$inject = ['$state'];

	function ComponentController($state) {
		var vm = this;
		vm.componentController = 'ComponentController';
	}

}());