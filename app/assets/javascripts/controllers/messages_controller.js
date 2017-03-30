myApp.controller("MessagesCtrl", 
  ["$scope", "Restangular",
  function($scope, Restangular) {

    $scope.hello = "helloooooooooo"
    $scope.messages = Restangular.all('messages').getList().$object;

  }]);