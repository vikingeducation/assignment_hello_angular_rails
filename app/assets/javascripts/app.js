helloApp = angular.module('helloApp', 
  ['ui.router', 'restangular']);

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

// // restangular

// helloApp.config(
//   ['RestangularProvider',
//   function(RestangularProvider) {

//     RestangularProvider.setBaseUrl('/api/v1');
//     RestangularProvider.setRequestSuffix('.json');
//   }]);

helloApp.config(
  ['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('messages', {
        url: '',
        controller: 'MessagesCtrl',
        templateUrl: 'templates/messages/index.html'
      });

}]);