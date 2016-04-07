(function () {
  'use strict';

  /**
   * Global error directive
   */
  angular.module('com.ngpepo.directives')
    .directive('errorG', function () {
      return {
        restrict: 'E',
        templateUrl: 'scripts/directives/error_g/error_g.html'
      };
    });
}());
