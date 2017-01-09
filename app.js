//MODULE
var myApp = angular.module('myApp', ['ngRoute']);

//ROUTER
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

//SERVICE
myApp.service('nameService', function () {

    var self = this;
    this.name = 'John Doe';

    this.namelength = function () {

        return self.name.length;

    };

});


myApp.service('dataService', function () {

    var self = this;
    // this.data = [{

    //     name: 'John Doe',
    //     address: '555 Main St.',
    //     city: ' New York',
    //     state: 'NY',
    //     zip: '11111'

    // }, {

    //     name: 'Jane Doe',
    //     address: '111 1st St.',
    //     city: ' New York',
    //     state: 'NY',
    //     zip: '10001'

    // }, {

    //     name: 'Bod Dobbs',
    //     address: '777 M St.',
    //     city: ' New York',
    //     state: 'NY',
    //     zip: '11011'

    // }];

    this.getData = function () {

        console.log(new Date().getMilliseconds() + ' Getting data...');


        return promise = new Promise(function (resolve, reject) {


            setTimeout(function () {

                console.log(new Date().getMilliseconds() + ' Got data...');

                self.data = [{

                    name: 'John Doe',
                    address: '555 Main St.',
                    city: ' New York',
                    state: 'NY',
                    zip: '11111'

                }, {

                    name: 'Jane Doe',
                    address: '111 1st St.',
                    city: ' New York',
                    state: 'NY',
                    zip: '10001'

                }, {

                    name: 'Bod Dobbs',
                    address: '777 M St.',
                    city: ' New York',
                    state: 'NY',
                    zip: '11011'

                }];

                console.log(self.data);
                console.log(new Date().getMilliseconds() + " Calling resolve(self.data)")
                resolve(self.data);


            }, 2000);
        })
    };
});





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


//DIRECTIVES
myApp.directive('searchResult', function () {

    return {

        restrict: 'AE', // 'A' use only when replacing attributes, 'E' replacing elements, 'C' replacing CSS classes, 'M' comment

        // A    <search-result></search-result>
        // E    <div search-result></div>
        // C    <div class="search-result"></div>
        // M    <!-- directive: search-result -->

        templateUrl: 'directives/searchresults.html',

        replace: true, // to replace custom directive element

        //    scope: {         // model just for this directive so we don't use the parent controller scope

        //        personName: "@",   // specify text type to match attribute in searchresults.html to use in the custom directive
        //        personAddress: "@"  // normalized field matches to person-address in html
        //    },

        scope: {

            personObject: "=", // 2 way binding to pass object to the directive
            formattedAddressFunction: "&" // pass function to directive
        },

        // compile: function (elem, attrs) {

        //     console.log('Compiling...');
        //     console.log(elem);
        //     //elem.removeAttr('class');  could update searchresults.html directive before it gets used

        //     console.log('elem.html()...');
        //     console.log(elem.html());


        //     return {
        //         // pre: function (scope, element, attrs) {
        //         //     console.log("Pre-linking...");
        //         //     console.log(element);

        //         // },                   // dont use pre-link
        //         post: function (scope, elements, attrs) {
        //             console.log('Post-linking...');
        //             console.log('Scope param: ');
        //             console.log(scope);

        //             // if (scope.personObject.name === "Jane Doe") {

        //             //     elements.removeAttr('class');
        //             // }   // could update element


        //             console.log('Elements param:');
        //             console.log(elements);


        //         }
        //     }
        // }

        // use link instead of compile to get access to scope and html and make changes
        link: function (scope, elements, attrs) {
            console.log('Linking...');
            console.log('Scope param: ');
            console.log(scope);

            // if (scope.personObject.name === "Jane Doe") {

            //     elements.removeAttr('class');
            // }   // could update element


            console.log('Elements param:');
            console.log(elements);


        },

        transclude: true // to use ng-transclude directive
    }
});