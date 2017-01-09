//CONTROLLERS
myApp.controller('mainController', ['$scope', '$log', 'nameService', 'dataService', function ($scope, $log, nameService, dataService) {

    $scope.name = nameService.name;

    $scope.$watch('name', function () {
        nameService.name = $scope.name;
        $log.log(nameService.name);
        $log.log(nameService.namelength());

    });



    var promise = dataService.getData();
    console.log(new Date().getMilliseconds() + " promise in controller: ");
    console.log(promise);

    promise.then(function (result) {

        console.log(new Date().getMilliseconds() + " Result in promise.then: ");
        console.log(result);

        $scope.$apply(function () {

            $scope.people = result;

        }); // this triggers a $digest

    }, function (err) {
        console.log(err)
    })



    $scope.formattedAddress = function (person) {

        return person.address + " , " + person.city + " , " + person.state + " " + person.zip
    };


}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function ($scope, $log, $routeParams, nameService) {

    $scope.num = $routeParams.num || 1;

    $scope.name = nameService.name;

    $scope.$watch('name', function () {
        nameService.name = $scope.name;
    });

}]);