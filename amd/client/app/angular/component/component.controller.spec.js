describe('Component Controller', function () {

 	var controller;

 	beforeEach(function () {
 		bard.appModule('app');
 		inject(function ($controller) {
 			controller = $controller('ComponentController', { });
 		});
	});

 	describe('Always', function () {
		it('Assigns the property \'componentController\' to the instance of the controller', function () {
			expect(controller.componentController).equal('ComponentController');
		});
 	});

});