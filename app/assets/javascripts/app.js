var myApp = angular.module('myApp', ['ui.router', 'restangular']);

myApp.config(
	['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('messages', {
		url: '/messages',
		templateUrl: 'templates/messages/index.html',
		controller: 'MessagesCtrl'
	})
}])

myApp.config(
	['RestangularProvider', 
	function(RestangularProvider) {

		RestangularProvider.setBaseUrl('/api/v1');
		RestangularProvider.setRequestSuffix('.json');

}])