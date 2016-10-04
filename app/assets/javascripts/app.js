var helloApp = angular.module('helloApp', ['ui.router', 'restangular']);

helloApp.factory('_', ['$window', function($window) {
  return $window._;
}]);

helloApp.config(['$stateProvider', '$urlRouterProvider', 'RestangularProvider',
function($stateProvider, $urlRouterProvider, RestangularProvider){

  // Restangular
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');

  $urlRouterProvider.otherwise('/messages');

  $stateProvider
    .state('messages', {
      url: '/messages',
      controller: 'MessagesCtrl',
      templateUrl: '/templates/messages/index.html',
      onEnter: function(){
        console.log("this is firing");
      }
    });
}]);


helloApp.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
