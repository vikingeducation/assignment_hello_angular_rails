var MyApp = angular.module('MyApp', ['ui.router', 'restangular']);

MyApp.factory('_', ['$window', function(){
  return $window._;
}]);
