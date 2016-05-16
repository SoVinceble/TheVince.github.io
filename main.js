<!-- angular module -->
      // declare a module
      // angular.module("name",[]) instantiates and returns a new module
var bitcoinCalculator = angular.module('bitcoinCalculator', []);
    
        // configure the module.
        //create a controller
        // function ($scope) {$scope.somenumber = 0;} binds the controller with the view
        bitcoinCalculator.controller('bitcoinController', function($scope, $http){

          // calling the api, grabbing the value for USD, appending it to the dom
    $http.get("https://bitpay.com/api/rates")
    .success(function(data){
      $scope.rates = data;
      for(var i=0;i<data.length;i++){
        if (data[i].code == "AOA"){
          $scope.currRate = data[i].rate;
        }
      }
      $scope.initalAmt = 5000;
      $scope.newAmt= function(price){
        return price/$scope.currRate * $scope.initalAmt;
      };
      $scope.profit = function(price){
        return price/$scope.currRate * $scope.initalAmt - $scope.initalAmt;
  };
    });
  });