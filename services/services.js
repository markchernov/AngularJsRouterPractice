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


