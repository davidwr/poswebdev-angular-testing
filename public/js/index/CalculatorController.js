angular.module('poswebdev').controller('CalculatorController', ['$scope', 'CalculatorService', function($scope, CalculatorService) {
  $scope.result = ''
  $scope.value1 = ''
  $scope.value2 = ''

  $scope.sumTwoValues = function () {
    $scope.result = CalculatorService.sumTwoValues($scope.value1, $scope.value2)
  }

  $scope.multiplyTwoValues = function () {
    $scope.result = CalculatorService.multiplyTwoValues($scope.value1, $scope.value2)
  }

  $scope.subtractTwoValues = function () {
    $scope.result = CalculatorService.subtractTwoValues($scope.value1, $scope.value2)
  }

  $scope.divideTwoValues = function () {
    $scope.result = CalculatorService.divideTwoValues($scope.value1, $scope.value2)
  }
}])
