var MyApp = angular.module('MyApp', ['ui.router', 'restangular']);

MyApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/")

  $stateProvider
    .state("messages", {
      url: "/messages",
      templateUrl: "templates/messages/index.html",
      controller: "MessagesCtrl"
    })

})