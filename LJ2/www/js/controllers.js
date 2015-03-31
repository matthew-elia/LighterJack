angular.module('starter.controllers', [])

.controller('BlueController', function($scope, $cordovaBLE, $cordovaLocalNotification, $cordovaVibration) {

	$scope.blueScan = function () {
		$cordovaBLE.scan([],6)
  }
 
  $scope.isScheduled = function() {
    $cordovaBLE.notify('C7A3D191-E205-912E-C984-0E454CFC8D07', '1803', '2A06');
  }

	$scope.blueConnect = function () {
		$cordovaBLE.connect('C7A3D191-E205-912E-C984-0E454CFC8D07').then(function() {
	    setInterval(function () { 
				$cordovaBLE.isConnected('C7A3D191-E205-912E-C984-0E454CFC8D07').then(function () {
			        console.log('Connected');
				  }, function (error) {
				 			console.log(''+error+'');
				 			$cordovaVibration.vibrate(2800);
				});
		  },3000);  
	  });
	}

	$scope.blueDisconnect = function () {
		$cordovaBLE.disconnect('C7A3D191-E205-912E-C984-0E454CFC8D07');
  }

});

