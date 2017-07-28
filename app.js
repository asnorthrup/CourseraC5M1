//IIFE
(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController); //controller for textbox, button and output region

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {

    $scope.checkItems = function () {
      if($scope.lunchItems) {
        var arrayOfStrings = $scope.lunchItems.split(',');
        if (arrayOfStrings.length > 3){
          $scope.msg="Too Much!";
        } else {
          $scope.msg="Enjoy!";
        }
      } else {
        $scope.msg="Please enter items.";
      }      
    };
  }
})();