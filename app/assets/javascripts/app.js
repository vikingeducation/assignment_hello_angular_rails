var MyApp = angular.module('MyApp', ['ui.router', 'restangular']);


MyApp.factory('_', ['$window', function($window) {
  return $window._;
}]);


MyApp.config(function($stateProvider, $urlRouterProvider) {
  // $urlRouterProvider.otherwise("");

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


MyApp.config(
  ['RestangularProvider',
  function(RestangularProvider) {

    RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setRequestSuffix('.json');

  }]);



MyApp.controller('TestCtrl', ['$scope', function($scope){
  $scope.message = 'Hello Angular on Rails!';
}]);



MyApp.controller('MessagesCtrl', ['$scope', 'Restangular', function($scope, Restangular){

  $scope.hello = 'hello';
  $scope.messages = Restangular.all('messages').getList().$object;
}]);









// debugging
MyApp.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});