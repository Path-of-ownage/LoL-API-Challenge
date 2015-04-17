/*globals angular */
angular.module('lolApi').controller('AboutController', function ($scope, $modalInstance, events) {

  $scope.events = events;

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});