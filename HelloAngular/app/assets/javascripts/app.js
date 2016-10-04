var MyApp = angular.module('MyApp', ['ui.router', 'restangular']);

MyApp.factory('_', ['$window', function($window) {
  return $window._;
}]);



MyApp.config(["$stateProvider", "$urlRouterProvider", "RestangularProvider", function($stateProvider, $urlRouterProvider, RestangularProvider) {
  
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');

  $urlRouterProvider.otherwise("/messages")

  $stateProvider

  .state("messages", {
    url:"/messages",
    controller: "MessagesCtrl",
    templateUrl: "/templates/messagesIndex.html"
  })

}]);