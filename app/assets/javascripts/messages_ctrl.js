helloApp.controller('MessagesCtrl',
['$scope', 'Restangular', function($scope, Restangular){

  $scope.hello = 'HELLO WORLD';

  $scope.messages = Restangular.all('messages').getList().$object;

}]);
