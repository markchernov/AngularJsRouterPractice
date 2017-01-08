var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.service('nameService', function() {
   
    var self = this;
    this.name = 'John Doe';
    
    this.namelength = function() {
      
        return self.name.length;
        
    };
    
});

myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService) {
    
    $scope.name = nameService.name;
    
    $scope.$watch('name', function() {
        nameService.name = $scope.name;
    });
    
    $log.log(nameService.name);
    $log.log(nameService.namelength());
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {
    
    $scope.num = $routeParams.num || 1;
    
    $scope.name = nameService.name;
    
    $scope.$watch('name', function() {
        nameService.name = $scope.name;
    });
    
}]);

myApp.directive('searchResult', function() {

return {                

   restrict: 'AE'   ,  // 'A' use only when replacing attributes, 'E' replacing elements, 'C' replacing CSS classes, 'M' comment

// A    <search-result></search-result>
// E    <div search-result></div>
// C    <div class="search-result"></div>
// M    <!-- directive: search-result -->

   templateUrl: 'directives/searchresults.html'   ,

   replace: true   // to replace custom directive element
}

});

