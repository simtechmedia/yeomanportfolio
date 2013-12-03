'use strict';

describe('Directive: majorDir', function () {

  // load the directive's module
  beforeEach(module('simangApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<major-dir></major-dir>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the majorDir directive');
  }));
});
