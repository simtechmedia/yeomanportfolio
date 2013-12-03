'use strict';

describe('Directive: projectBox', function () {

  // load the directive's module
  beforeEach(module('simangApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<project-box></project-box>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the projectBox directive');
  }));
});
