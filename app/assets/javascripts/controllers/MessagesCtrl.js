MyApp.controller("MessagesCtrl", ["$scope", "Restangular", function($scope, Restangular) {

  console.log("messages ctrl");
  $scope.messages = Restangular.all('messages').getList().$object;
  
}]);