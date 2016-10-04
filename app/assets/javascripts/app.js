var MyApp = angular.module('MyApp', ['ui.router', 'restangular']);

MyApp.factory('_', ['$window', function(){
  return $window._;
}]);

MyApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state("messages", {
    url: "/messages",
    views: {
      "": {
        templateUrl: "/templates/messages/index.html",
        controller: "MessagesCtrl"
      }
    }
  })
})

MyApp.config(
  ["$httpProvider",
  function($httpProvider) {
  var token = $('meta[name=csrf-token]')
  .attr('content');
  $httpProvider
  .defaults
  .headers
  .common['X-CSRF-Token'] = token;
}]);

// Restangular config
MyApp.config(
  ['RestangularProvider',
  function(RestangularProvider) {

  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');

}]);