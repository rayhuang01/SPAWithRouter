define(['jquery'], function ($) {
    alert("Index");
	//function indexViewModel() {
	//	var self = this;

	//	function MyViewModel() {
	//		this.products = ko.observableArray(); // Start empty
	//	}

	//	self.Product = function (name, rating) {
	//		this.name = name;
	//		this.userRating = ko.observable(rating || null);
	//	}

	//	MyViewModel.prototype.addProduct = function () {
	//		var name = 'Product ' + (this.products().length + 1);
	//		this.products.push(new Product(name));
	//	};

	//	self.products = ko.observableArray([
	//			new self.Product('Garlic bread'),
	//			new self.Product('Pain au chocolat'),
	//			new self.Product('Seagull spaghetti', 'like') // This one was already 'liked'
	//	]);

	//	//ko.components.register('like-or-dislike', {
	//	//	viewModel: { require: 'templates/viewModel/component-like-widget' },
	//	//	template: { require: 'text!templates/template/component-like-widget.html' }
	//	//});

	//	ko.components.register('like-widget', {
	//		viewModel: function (params) {
	//			// Data: value is either null, 'like', or 'dislike'
	//			this.chosenValue = params.value;

	//			// Behaviors
	//			this.like = function () { this.chosenValue('like'); }.bind(this);
	//			this.dislike = function () { this.chosenValue('dislike'); }.bind(this);
	//		},
	//		template:
	//			'<div class="like-or-dislike" data-bind="visible: !chosenValue()">\
    //        <button data-bind="click: like">Like it</button>\
    //        <button data-bind="click: dislike">Dislike it</button>\
    //    </div>\
    //    <div class="result" data-bind="visible: chosenValue">\
    //        You <strong data-bind="text: chosenValue"></strong> it\
    //    </div>'
	//	});

	//}
    
	//return new indexViewModel();

});