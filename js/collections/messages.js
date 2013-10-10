var app = app || {};

(function () {
	'use strict';

	// Messages Collection
	var Messages = Backbone.Collection.extend({
		model: app.Message,
		localStorage: new Backbone.LocalStorage('messages-backbone'),

		// functions
		nextOrder: function () {
			if (!this.length) {
				return 1;
			}
			return this.last().get('order') + 1;
		}
	});

	// instantiate object
	app.messages = new Messages();
})();
