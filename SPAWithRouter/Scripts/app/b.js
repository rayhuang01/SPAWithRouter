define(['app', 'knockout'], function (app, ko) {
    function MyViewModelB() {
        var self = this;

        self.init = function () {
            console.log('success!');
        };

        self.dispose = function () {
        };

        self.controllers = {
            '/': function () { }
        };

        this.PageName = 'Block B';

        self.redirectToPageA = function () {
            app.redirectTo('/spa/SpaPage');
        }

    }

    return new MyViewModelB();
});