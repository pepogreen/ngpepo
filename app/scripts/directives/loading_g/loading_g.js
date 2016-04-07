(function () {
  'use strict';
  angular.module('com.ngpepo.directives').directive('loadingG', ['ConstantsFactory', function (ConstantsFactory) {
    var dir = {};
    dir.restrict = 'E';
    dir.replace = true;
    dir.templateUrl = 'scripts/directives/loading_g/loading_g.html';
    dir.controller = ['$scope', function ($scope) {
      $scope.constants = ConstantsFactory;
    }];

    return dir;
  }]);
}());
