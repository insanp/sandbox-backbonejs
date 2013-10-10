var app = app || {};

(function ($) {
	'use strict';

	// Contact View
	app.ContactView = Backbone.View.extend({
		tagName:  'tr',
		template: _.template($('#item-template').html()),

		events: {
			'click .delete-contact': 'clear'
		},

		initialize: function () {
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
			this.listenTo(this.model, 'visible', this.toggleVisible);
		},

		render: function () {
			console.log(this.model.toJSON())
			this.$el.html(this.template(this.model.toJSON()));
			
			return this;
		},
		
		clear: function () {
			this.model.destroy();
		}
	});
})(jQuery);
