var myApp = angular.module('myApp', ['ui.router', 'restangular']);

myApp.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('messages', {
		url: '/messages',
		templateUrl: 'templates/messages/index.html',
		controller: 'MessagesCtrl'
	})
})