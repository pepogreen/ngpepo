(function () {
  'use strict';
  angular.module('com.ngpepo.services')
    .factory('ConstantsFactory', [ function () {
      var constants = {
        COMMON: {
          APP_NAME: 'ngPepo'
        },
        HEADER: {
          HEAD_TEXT: 'Header Directive here...'
        },
        FOOTER: {
          FOOT_TEXT: 'Footer Directive here...'
        },
        LOADING: {
        	LOAD_TEXT: 'Loading...'
        }
      };
      return constants;
    }]);
}());
