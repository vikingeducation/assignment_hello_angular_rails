var myApp = angular.module("myApp", ['ui.router', 'restangular']);

myApp.factory('_', ['$window', function($window) {
  return $window._;
}]);

myApp.config(
  ["$stateProvider", "$urlRouterProvider", 
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("messages", {
        url: "",
        templateUrl: "templates/messages/index.html",
        controller: "MessagesCtrl"
      })

  }])