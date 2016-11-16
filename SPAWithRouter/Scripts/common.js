var baseUrl = '/';
require.config({
    paths: {
        'a': 'Scripts/app/a',
        'b': 'Scripts/app/b',

        'a-js': 'Scripts/app/a',
        'b-js': 'Scripts/app/b',
        'indexjs': 'Scripts/app/index.viewmodel',
        'common': 'Scripts/common',
        'knockout.raw': 'Scripts/lib/knockout-3.4.0.debug',
        'amd-helpers': 'Scripts/lib/knockout-amd-helpers',
        'knockout': 'Scripts/ext/knockout-extension',
        'mapping': 'Scripts/lib/knockout.mapping-latest.debug',
        'text': 'Scripts/lib/require-text',
        'jquery': 'Scripts/jquery-1.8.2',
        'component-like-widget-html': 'templates/template/component-like-widget.html',
        'component-like-widget-js': 'templates/viewModel/component-like-widget',
        'Routes': 'Scripts/app/routes',
        'Router': 'Scripts/lib/director',

        //'app': 'Scripts/framework/page',
        'app': 'Scripts/app/app',
        'PageDisposer': 'Scripts/framework/page-disposer',
        'AppRouter': 'Scripts/framework/router',
    },
    baseUrl: baseUrl,
    waitSeconds: 0,
    shim: {
        'Router': {
            exports: 'Router'
        }
    },
    deps: ['knockout', 'mapping'],
    callback: function (ko, mapping) {
        ko.mapping = mapping;
    }
});
require(['AppRouter']);
//require(['app', 'knockout'], function (app, ko) {
//    //alert($().jquery);
//    require(['b']);

//    ko.amdTemplateEngine.renderTemplate('templates/template/b.html', null, null, document);
//    app.init('a');
//    ko.applyBindings(app, document.getElementsByTagName('html')[0]);
//});
//var paths = {
//    /* TODO: register all AMD modules by providing CamelCase aliases, exceptions are RequireJS plugins and named AMD modules, whose names are fixed */
//    /* follow files dictionary order */

//    //data model
//    'DataModel': 'Scripts/app/app.datamodel',
//};
//var baseUrl = '/';
//require.config({
//    config: {
//        text: {
//            useXhr: function (url, protocol, hostname, port) {
//                return true;
//            },
//            onXhrComplete: function (xhr, url) {
//                //Called whenever an XHR has completed its work. Useful
//                //if browser-specific xhr cleanup needs to be done.
//                if (xhr.status == 0) {
//                    var key;
//                    for (var p in paths) {
//                        if ((baseUrl + paths[p]).replace(/\/+/, '/') == url) {
//                            key = p;
//                            break;
//                        }
//                    }

//                    require(['knockout'], function (cs, ko) {
//                        if (url.indexOf('/components/') == -1) {
//                            requirejs.undef('text!' + (key || url));
//                            ko.amdTemplateEngine.resetRequest((key || url));
//                        }

//                        cs.showInfoWhenInternetUnavailable();
//                        cs.logException("Error: Page Load Failed. \n + Active URL: " + (key || url));
//                    });
//                }
//            }
//        }
//    },
//    baseUrl: baseUrl,
//    paths: paths,
//    waitSeconds: 0,
//    locale: getCookie('Language') || 'en-US',
//    shim: {
//        /* TODO: provide all needed shims for non-AMD modules */
//        'Class': {
//            exports: 'Class'
//        },
//        'Router': {
//            exports: 'Router'
//        },
//        'Custom': ['jquery']
//    },
//    deps: ['knockout', 'mapping'],
//    callback: function (ko, mapping) {
//        ko.mapping = mapping;
//    }
//});

//requirejs.onError = function (err) {
//    if (err.requireType == "scripterror") {
//        var failedId = err.requireModules && err.requireModules[0];
//        requirejs.undef(failedId);
//        require('ClientScript').showInfoWhenInternetUnavailable();
//    }

//    console.log(err.stack);
//    throw err;
//};
//require(['AppRouter']);
