helloApp = angular.module('helloApp', ['ui.router', 'restangular', '']);

// Service for Lodash/Underscore
helloApp.factory('_', ['$window', function($window) {
  return $window._;
}]);


// CSRF support
helloApp.config(
  ["$httpProvider",
  function($httpProvider) {
    var token = $('meta[name=csrf-token]')
      .attr('content');
    $httpProvider
      .defaults
      .headers
      .common['X-CSRF-Token'] = token;
  }]);