App.controller('MessagesCtrl', ['$scope', '$http', 'Restangular', function($scope, $http, Restangular){
    $scope.messages = Restangular.all('messages').getList().$object;
}]);
