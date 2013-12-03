'use strict';

describe('Controller: ProjectboxCtrl', function () {

  // load the controller's module
  beforeEach(module('simangApp'));

  var ProjectboxCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectboxCtrl = $controller('ProjectboxCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
