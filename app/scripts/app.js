(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name ngPepoApp
   * @description
   * # ngPepoApp skeleton
   *
   * Main module of the application.
   */

  angular.module('com.ngpepo.controllers', []);
  angular.module('com.ngpepo.services', []);
  angular.module('com.ngpepo.directives', ['com.ngpepo.services']);
  angular.module('com.ngpepo.filters', []);


  /*global window*/
  var ngPepoApp = angular.module('ngPepoApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'com.ngpepo.controllers',
      'com.ngpepo.services',
      'com.ngpepo.directives',
      'com.ngpepo.filters'
    ]),
    fetchConfig = function () {
      var injector = angular.injector(['ng']),
        $http = injector.get('$http');
      return $http.get('config.json');
    },
    initApp = function () {
      fetchConfig().then(function (config) {
        ngPepoApp.constant('CONFIG', config.data);
        angular.element(document.body).ready(function () {
          angular.bootstrap(document.body, ["ngPepoApp"]);
        });
      }, function (errorResponse) {
        window.alert("Unknown error occurred:\n" + JSON.stringify(errorResponse));
      });
    },
    isAndroid = navigator.userAgent.match(/Android/i) !== null,
    viewport = document.querySelector("meta[name=viewport]");
  ngPepoApp.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    $httpProvider.defaults.withCredentials = true;
    $routeProvider
      .when('/home', {
        templateUrl: 'views/ngpepo.html',
        controller: 'NgPepoCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }]);
  ngPepoApp.controller('AppController', ['$scope', '$location', function ($scope, $location) {
    $scope.navigateTo = function (navUrl) {
      $location.path('/' + navUrl);
    };
  }]);
  /* Mock Integration */
  ngPepoApp.run([ '$rootScope', function ($rootScope) {
    $rootScope.$on('$locationChangeSuccess', function () {
      $rootScope.error = false;
      $rootScope.loading = true;
    });
  }]);

  // Android S3 stack browser - some wired media config
  if (isAndroid && viewport !== undefined) {
    if ((screen.width === 720 && screen.height === 1280 && window.devicePixelRatio === 2) || (screen.width === 1280 && screen.height === 720 && window.devicePixelRatio === 2)) {
      viewport.setAttribute('content', 'width=device-width,height=device-height,initial-scale=1.0,target-densitydpi=medium-dpi');
    }
  }
  /// app bootstarping kick off
  initApp();
}());
