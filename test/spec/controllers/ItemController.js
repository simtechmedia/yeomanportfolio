'use strict';

describe('Controller: ItemcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('simangApp'));

  var ItemcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ItemcontrollerCtrl = $controller('ItemcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
