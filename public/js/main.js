angular.module('poswebdev', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'js/index/templateCalculator.html',
    controller: 'CalculatorController'
  })
  .otherwise({redirectTo:'/'})
}])
