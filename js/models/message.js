var app = app || {};

(function () {
	'use strict';
	
	// Message Model
	app.Message = Backbone.Model.extend({

		defaults: {
			name: '',
			message: '',
			id: 0,
			order: 1	
		},
		
		idAttribute: '_id'
	});
})();
