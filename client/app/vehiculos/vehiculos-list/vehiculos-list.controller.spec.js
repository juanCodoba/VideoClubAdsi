'use strict';

describe('Component: VehiculosListComponent', function () {

  // load the controller's module
  beforeEach(module('videoClubApp'));

  var VehiculosListComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    VehiculosListComponent = $componentController('VehiculosListComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
