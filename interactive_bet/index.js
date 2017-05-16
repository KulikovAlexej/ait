APP = angular.module('App', ['ngRoute']);

APP.controller('Panel', function($scope){
	$scope.webSite = {
		first: 'BetExplorer',
		second: 'Sports'
	}
	$scope.matches = [
		{league: 'BundesLiga', owner: 'Shal\'ke-04', guest: 'Nurnberg', score: '1:1', class: 'active'},
		{league: 'RFPL', owner: 'Zenit', guest: 'CSKA', score: '2:2', class: 'disabled'},
		{league: 'BundesLiga', owner: 'Shal\'ke-04', guest: 'Nurnberg', score: '1:1', class: 'disabled'},
		{league: 'RFPL', owner: 'Zenit', guest: 'CSKA', score: '2:2', class: 'disabled'},
		{league: 'BundesLiga', owner: 'Shal\'ke-04', guest: 'Nurnberg', score: '1:1', class: 'disabled'},
		{league: 'RFPL', owner: 'Zenit', guest: 'CSKA', score: '2:2', class: 'disabled'},
		{league: 'BundesLiga', owner: 'Shal\'ke-04', guest: 'Nurnberg', score: '1:1', class: 'disabled'},
		{league: 'RFPL', owner: 'Zenit', guest: 'CSKA', score: '2:2', class: 'disabled'},
		{league: 'BundesLiga', owner: 'Shal\'ke-04', guest: 'Nurnberg', score: '1:1', class: 'disabled'},
		{league: 'RFPL', owner: 'Zenit', guest: 'CSKA', score: '2:2', class: 'disabled'},
	];
	$scope.selectMatch = function(event){
		console.log(event.class)

	}
	console.log($scope.matches.length)
})