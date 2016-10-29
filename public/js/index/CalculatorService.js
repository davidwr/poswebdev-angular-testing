angular.module('poswebdev').service('CalculatorService', [function () {
  return {
    sumTwoValues: (a, b) => {
      return a + b
    },

    multiplyTwoValues: (a, b) => {
      return a * b
    },

    subtractTwoValues: (a, b) => {
      return a - b
    },

    divideTwoValues: (a, b) => {
      return a / b
    }
  }
}])