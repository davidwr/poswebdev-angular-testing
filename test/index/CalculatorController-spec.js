describe('CalculatorController', () => {
  var service

  beforeEach(module('poswebdev'))
  beforeEach(inject(($rootScope, $controller) => {
    $scope = $rootScope.$new()
    $controller('CalculatorController', {
      $scope: $scope
    })
  }))

  it('sumTwoValues', () => {
    $scope.value1 = 1
    $scope.value2 = 2
    $scope.sumTwoValues()
    expect($scope.result).toEqual(3)
  })

  it('multiplyTwoValues', () => {
    $scope.value1 = 5
    $scope.value2 = 5
    $scope.multiplyTwoValues()
    expect($scope.result).toEqual(25)
  })

  it('subtractTwoValues', () => {
    $scope.value1 = 5
    $scope.value2 = 1
    $scope.subtractTwoValues()
    expect($scope.result).toEqual(4)
  })

  it('divideTwoValues', () => {
    $scope.value1 = 25
    $scope.value2 = 5
    $scope.divideTwoValues()
    expect($scope.result).toEqual(5)
  })
})