var MyApp = angular.module('MyApp', ['ui.router', 'restangular']);

MyApp.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/messages');

	$stateProvider
		.state('messages', {
			url: "/messages",
			template: 'FUCK',
			controller: 'MessagesCtrl'
		})

});