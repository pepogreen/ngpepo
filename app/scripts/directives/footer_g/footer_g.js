/**
 * @global footer
 */
(function () {
  'use strict';
  angular.module('com.ngpepo.directives')
    .directive('footerG', function () {
      return {
        restrict: 'EA',
        replace: false,
        templateUrl: 'scripts/directives/footer_g/footer_g.html',
        controller: ['$scope', 'ConstantsFactory', function ($scope, ConstantsFactory) {
          $scope.pageConstants = ConstantsFactory;
        }]
      };
    });
}());
