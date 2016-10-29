angular.module('poswebdev').directive('calculatorDirective', [function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'js/index/templateDirective.html',
    scope: {
      variable: '@'
    },
    link: function (scope, elems, attrs) {
      scope.newValue = attrs.variableTwo
    }
  }
}])
