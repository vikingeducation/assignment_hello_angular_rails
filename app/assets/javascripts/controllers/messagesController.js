helloApp.controller('MessagesCtrl', 
  ['$scope', 'Restangular',
  function($scope, Restangular) {

  console.log("hello from MessagesCtrl");

  $scope.messages = Restangular.all('messages').getList().$object;

  console.log($scope.messages);
}]);