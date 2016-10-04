var helloApp = angular.module('helloApp', ['ui.router', 'restangular'])

helloApp.factory('_', ['$window', function($window) {
  return $window._;
}]);

helloApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

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

helloApp.controller('MessagesCtrl', ['$scope', function($scope){

  $scope.hello = 'HELLO WORLD';

}]);

helloApp.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});