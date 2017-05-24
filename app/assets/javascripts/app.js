var MyApp = angular.module('MyApp', ['ui.router', 'restangular']);




MyApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("");

  $stateProvider
    .state('default', {
      url: '',
      views: {
        "": {
          templateUrl: 'templates/messages/index.html',
          controller: 'MessagesCtrl'
        }
      }
    })

});




MyApp.controller('TestCtrl', ['$scope', function($scope){
  $scope.message = 'Hello Angular on Rails!';
}]);



MyApp.controller('MessagesCtrl', ['$scope', function($scope){

  $scope.hello = 'hello';

}]);









// debugging
MyApp.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});