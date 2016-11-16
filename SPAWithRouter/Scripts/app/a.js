define(['app', 'knockout', 'jquery'], function (app, ko, $) {
    function Product(name, rating) {
        this.name = name;
        //this.userRating = ko.observable(rating || null);
        this.userRating = rating;
    }

    function MyViewModel() {
        var self = this;
        this.products = ko.observableArray([{ name: 'aaaaa', userRating: '' }, { name: 'bbbb', userRating: '' }, { name: 'cccc', userRating: '' }]); // Start empty
        //this.products = [{ name: 'aaaaa', userRating: '' }, { name: 'bbbb', userRating: '' }, { name: 'cccc', userRating: '' }];
        this.test = "A block";

        self.init = function () {
            console.log('success!');
        };

        self.dispose = function () {
        };

        self.controllers = {
            '/': function () { }
        };

        self.addProduct = function () {
            var name = 'Product ' + (this.products().length + 1);
            //this.products().push(new Product(name));
            var array = this.products();
            array.push(new Product(name));
            this.products(array);
        };

        self.likeEvent = function (param) {
            //$.each(self.products(), function (item) {
            //    if (item.name == param.name)
            //    {
            //        item.userRating = param.value;
            //    }
            //});
            var array = this.products();
            $.each(array, function (index, item) {

                if (item.name == param.name) {
                    item.userRating = param.value;
                }
            });
            this.products(array);

        };

        self.redirectToPageB = function () {
            app.redirectTo('/b');
        }
    }


    //return {
    //    test: 'this.isA',
    //    products: [{ name: 'aaaaa', userRating: '' }, { name: 'bbbb', userRating: '' }, { name: 'cccc', userRating: '' }],
    //    likeordislike: function () { return like }
    //};
    return new MyViewModel();
});