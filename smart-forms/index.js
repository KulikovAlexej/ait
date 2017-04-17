
APP = angular.module('App', ['ngRoute']);



APP.controller('Form', function($scope, $locale) {
	$scope.inputs = [
		{name: 'userPhone', type: 'text', value: '', placeholder: 'Ваш номер телефона', visible: true, required: true, maxLength: undefined, minLength:undefined, pattern: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/},
		{name: 'userName', type: 'text', value: '', placeholder: 'Ваше имя', visible: false, required: false, maxLength: 15, minLength: 3, pattern: /^[_a-zA-Z0-9а-яА-Я ]+$/},
		{name: 'userMail', type: 'email', value: '', placeholder: 'Ваш Email', visible: false, required: false, maxLength: 40, minLength: 3, pattern: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/}
	];
	$scope.checking = function(input, form) {
		switch(input.name){
			case "userPhone":
				console.log('userPhone');
				if($scope.contacts.userPhone.$valid && $scope.contacts.userPhone.$dirty){
					console.log('Сейчас я сделаю видимым второй инпут');
					$scope.inputs[1].visible = true;
				}
				break;
			case "userName":
				console.log('userName ' + $scope.contacts.userName.$valid && $scope.contacts.userName.$dirty);
				console.log('Свойство visible у первого инпута = ' + $scope.inputs[0].visible);
				console.log('Свойство visible у второго инпута = ' + $scope.inputs[1].visible);
				break;
			case "userMail":
				console.log('userMail ' + $scope.contacts.userMail.$valid && $scope.contacts.userMail.$dirty);
				break;
			default:
				console.log('такого не предусмотрел');
		}

	}


});

APP.controller('Phones', function($scope, $locale) {
	$scope.phones = [
		{number: '8-918-135-10-04', status: true},
		{number: '8-918-135-10-05', status: false},
		{number: '8-918-135-10-06', status: false},
		{number: '8-918-135-10-07', status: true}
	];

})
