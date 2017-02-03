var App = angular.module("App", ['ui.router', 'restangular']);

App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('messages');

  $stateProvider
    .state('messages', {
      url: '/messages',
      templateUrl: 'templates/index.html',
      controller: 'MessagesCtrl'
    })
}]);
