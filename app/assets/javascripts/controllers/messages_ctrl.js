MyApp.controller('MessagesCtrl', ['$scope', '$stateParams', 'Restangular',
  function($scope, $stateParams, Restangular) {
    $scope.messages = Restangular.all('messages').getList().$object;
}]);
