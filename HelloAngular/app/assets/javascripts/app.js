var MyApp = angular.module('MyApp', ['ui.router', 'restangular']);

MyApp.factory('_', ['$window', function($window) {
  return $window._;
}]);


MyApp.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/messages")

  $stateProvider

  .state("messages", {
    url:"/messages",
    controller: "MessagesCtrl",
    templateUrl: "/templates/messagesIndex.html"
  })

}]);