
APP = angular.module('App', ['ngRoute']);

APP.controller('Main', function($scope, $locale) {
    $scope.message = 'Hello world';
});
