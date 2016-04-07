(function () {
  'use strict';
  /**
   * @ngdoc function
   * @name ngpepo.controller:NgPepoCtrl
   * @description
   * # NgPepoCtrl
   * Controller to serve ngpepo.html.
   */
  angular.module('com.ngpepo.controllers')
    .controller('NgPepoCtrl', [
      '$scope', 'NgPepoFactory', '$timeout',
      function ($scope, NgPepoFactory, $timeout) {
        var appData = NgPepoFactory.getAppName();
        appData.then(function (data) {
          $scope.appName = data.appName;
        });
        $timeout(function (){
        	$scope.$root.loading = false; // hide loading
        	$scope.$root.error = true; // disable error screen
        }, 3000);
      }]);
}());