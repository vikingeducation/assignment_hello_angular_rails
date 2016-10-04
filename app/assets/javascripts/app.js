var app = angular.module('app', ['ui.router', 'restangular']);


app.factory('_', ['$window', function($window) {
  return $window._;
}]);

app.config(
  ["$httpProvider",
  function($httpProvider) {
    var token = $('meta[name=csrf-token]')
      .attr('content');
    $httpProvider
      .defaults
      .headers
      .common['X-CSRF-Token'] = token;
  }]);

app.config(['RestangularProvider', function(RestangularProvider){



}]);


app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('messages', {
        templateUrl: 'template/messages/index.html',
        controller: MessagesCtrl,
    })

}])
