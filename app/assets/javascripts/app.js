var MyApp = angular.module('MyApp', ['ui.router', 'restangular']);


MyApp.controller('TestCtrl', ['$scope', function($scope){
  $scope.message = 'Hello Angular on Rails!';
}])