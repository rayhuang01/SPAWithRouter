/**
 * @license Copyright (c) 2015 Cheng Fan
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
define(['app', 'Routes', 'Router', 'jquery'], function (app, Routes, Router) {

    function initPage(pageName, controller) {
        require([pageName + '-js'], function (page) {
            app.init(pageName, page, controller);
        });
    }

    var routes = {};
    $.each(Routes, function (key, value) {
        var values = value.split(' ');
        var pageName = values[0];
        var controllerName = values[1];
        routes[key] = function () {
            //app.loading(true);
            var args = Array.prototype.slice.call(arguments, 0);
            var controller = controllerName ? function (page) {
                return page.controllers[controllerName].apply(null, args);
            } : null;
            initPage(pageName, controller);
        };
    });

    var router = new Router(routes).configure({
        strict: false,
        html5history: true,
        convert_hash_in_init: false,
        notfound: function () {
            routes['/error404/:code'](404);
        }
    });

    var urlNotAtRoot = window.location.pathname && (window.location.pathname != '/');

    if (!router.historySupport && urlNotAtRoot) {
        window.location.href = '/#' + (window.location.pathname.indexOf('/') == 0 ? '' : '/') + window.location.pathname;
        return;
    }

    if (urlNotAtRoot) {
        router.init();
    } else {
        router.init('/');
    }

    var bindRoute = function () {
        $('body').on('click', 'a[href]', function (event) {
            var href = $(this).attr('href');
            if (href && !href.indexOf('http') == 0 && !href.indexOf('//') == 0 && !href.indexOf('#') == 0 &&
                ($(this).attr('target') != '_blank') && !$(this).data('go') && !event.ctrlKey && !event.metaKey) {
                event.preventDefault();
                //app.loading(true);
                router.setRoute(href);
            } else if (href && href != "#" && href.indexOf("#") == 0) {
                if (href.indexOf('_') == -1) {
                    window.history.pushState({ time: new Date().getTime() }, '', href);
                }
            }
        });
    }
    bindRoute();

    router.triggerTabWithOutHash = function (hash) {
        if (hash.indexOf('#') != 0) {
            hash = '#' + hash;
        }
        var hash = hash;
        if (hash && hash != "#") {
            if (!$(hash).hasClass("active") && $("a[href=" + hash + "]").length > 0) {
                $('body').off('click', 'a[href]');
                $("a[href=" + hash + "]").click();
                bindRoute();
            }
        }
    };

    return router;

});
