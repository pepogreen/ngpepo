'use strict';

describe('Controller: NgPepoCtrl', function () {

  // load the controller's module
  beforeEach(module('ngPepoApp'));

  var NgPepoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NgPepoCtrl = $controller('NgPepoCtrl', {
      $scope: scope
    });
  }));
});
