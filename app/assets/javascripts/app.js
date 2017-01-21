var MyApp = angular.module('MyApp', ['ui.router', 'restangular']);

// inject the services provided by ui-router
MyApp.config(
  ['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/messages');

    $stateProvider
      .state('messages', {
        url: '/messages',
        templateUrl: '/templates/messages/index.html',
        controller: 'MessagesCtrl'
      })
  }]
);

MyApp.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});