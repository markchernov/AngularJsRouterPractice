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