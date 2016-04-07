(function () {
  'use strict';
  angular.module('com.ngpepo.services')
    .factory('NgPepoFactory', ['$http', '$q', 'CONFIG', 'ConstantsFactory',
      function ($http, $q, CONFIG, ConstantsFactory) {
        var self = this,
          apiURL = CONFIG.apiURL,
          environment = CONFIG.env,
          httpConfig = {},
          pageConstants = ConstantsFactory;
        self.getAppName = function () {
          var deferred = $q.defer(),
            mockData = {
              "appName": pageConstants.COMMON.APP_NAME
            };
          if (environment === "local") {
            deferred.resolve(mockData);
          } else {
            $http.get(apiURL, httpConfig)
              .success(function (data) {
                deferred.resolve(data);
              })
              .error(function (data) {
                deferred.reject(data);
              });
          }
          return deferred.promise;
        };
        return self;
      }]);
}());