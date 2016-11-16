define(['PageDisposer', 'knockout'], function (PageDisposer, ko) {

    var initialRun = true;

    var app = {
        page: ko.observable({
            name: '',
            data: {
                init: function () { },
                dispose: function () { }
            }
        }),
        init: function (name, data, controller) {
            //require([name], function (viewModel) {
            //    app.page({
            //        name: name,
            //        data: new viewModel()
            //    })
            //});

            if (app.page()) {
                var autoDispose = app.page().data.dispose(app); // if the requested page is not the same page, dispose current page first before swap to the new page
                if (autoDispose !== false) {
                    // auto-dispose page's exposed observables and primitive properties to initial values. if not desired, return false in dispose function to suppress
                    // auto-disposal for all public properties of the page, or make the particular properties private
                    PageDisposer.dispose(app.page().data);
                }
            }
            

            var date = new Date();
            app.uniqueModuleName = name + date.getTime();

            PageDisposer.init(data); //store initial observable and primitive properties values of the page
            data.init(app); // init view model and call controller (optional) before template is swapped-in

            if (controller) {
                controller(data);
            }

            app.page({
                name: name,
                data: data
            }); // to test if template finished rendering, use afterRender binding in the template binding

            if (initialRun) {
                ko.applyBindings(app, document.getElementsByTagName('html')[0]); // apply binding at root node to be able to bind to anywhere
                initialRun = false;
            }
        },
        //addProduct: function () {
        //    app.page().data.addProduct();
        //    //app.init('a');
        //},
        //likeEvent: function () {
        //    app.page().data.likeEvent();
        //    //app.init('a');
        //},
        redirectTo: function (url) {
            //if (!cs.CheckEnabledCookie()) {
            //    //Inline message
            //    cs.showFistLevelError({ Message: "Please enable your browser cookie.", Caption: "Error" });
            //    // Handle null exception, do not return json object(Message in json formate will be shown up).
            //    //Inline message
            //    var xhr = { "responseText": "Please enable your browser cookie." };
            //    return $.Deferred().reject(xhr, 'error');
            //}

            Router().setRoute(url);
        }
    };

    return app;

});