angular.module('starter.controllers', [])

.controller('BlueController', function($scope, $cordovaBLE, $cordovaLocalNotification) {

	$scope.blueScan = function () {
		$cordovaBLE.scan([],5)
	}

	$scope.blueConnect = function () {
		$cordovaBLE.connect('C7A3D191-E205-912E-C984-0E454CFC8D07')
		.then(function() {
			setInterval(function () { 
		    $cordovaBLE.isConnected('C7A3D191-E205-912E-C984-0E454CFC8D07')
		    .then(function () {
		    	alert('success');
		    }, function () {
		    	alert('failure');
		    })
		},5000);
	  });
	}

	$scope.blueDisconnect = function () {

  	}
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
