define(['knockout.raw', 'amd-helpers'], function (ko) {

    ko.components.register('like-or-dislike', {
        viewModel: { require: 'component-like-widget-js' },
        template: { require: 'text!component-like-widget-html' }
    });

    return ko;
});