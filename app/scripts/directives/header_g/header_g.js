/**
 * @global header
 */
(function () {
  'use strict';
  angular.module('com.ngpepo.directives')
    .directive('headerG', function () {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'scripts/directives/header_g/header_g.html',
        controller: ['$scope', 'ConstantsFactory', function ($scope, ConstantsFactory) {
          $scope.pageConstants = ConstantsFactory;
        }]
      };
    });
}());