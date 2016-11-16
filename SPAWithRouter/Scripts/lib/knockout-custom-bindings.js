ko.bindingHandlers.initAmountEvents = {
    update: function (element, valueAccessor, allBindings) {
        app.initAmountEvents(element, ko.unwrap(valueAccessor()));
    }
};

ko.bindingHandlers.fitText = {
    init: function (element, valueAccessor) {

        debounce = function (func, delay, immediate) {
            var timeout, result;
            return function () {
                var context = this, args = arguments;
                var later = function () {
                    timeout = null;
                    if (!immediate) {
                        result = func.apply(context, args);
                    }
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, delay);
                if (callNow) {
                    result = func.apply(context, args);
                }
                return result;
            };
        };

        if (element.tagName == "INPUT") {
            var $el = $(element),
                defaultSize,
                defaultLineHeight,
                cssFontSize = 'font-size',
                cssLineHeight = 'line-height';

            var resetFitText = function () {
                //reset, remove inline styles to get the theme style definitions
                defaultSize = $el.css(cssFontSize, '').css(cssFontSize);
                defaultLineHeight = $el.css(cssLineHeight, '').css(cssLineHeight);
                //apply fixed line-height so the input box height doesn't change
                $el.css(cssLineHeight, defaultLineHeight);
                updateFitText();
            };
            var updateFitText = function () {
                $el.inputfit({
                    minSize: 1,
                    maxSize: parseFloat(defaultSize)
                });
            };

            //reset to account for media query style changes
            $(window).resize(debounce(resetFitText, 250));
            resetFitText();
        }
    }
};