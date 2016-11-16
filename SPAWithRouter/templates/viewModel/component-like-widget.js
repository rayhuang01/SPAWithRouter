define(['knockout'], function (ko) {

    function LikeWidgetViewModel(params) {
        this.chosenValue = ko.observable(null);
        this.chosenValue(params.value);
        this.name = params.name;
        //this.likeEvent = params.likeEvent;
    }

    LikeWidgetViewModel.prototype.like = function () {
        this.chosenValue('like');
        //this.likeEvent({ name: this.name, value: this.chosenValue() });
    };

    LikeWidgetViewModel.prototype.dislike = function () {
        this.chosenValue('dislike');
    };

    return LikeWidgetViewModel;

});