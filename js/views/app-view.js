var app = app || {};

(function ($) {
	'use strict';

	app.AppView = Backbone.View.extend({

		el: '#wallapp',
		
		events: {
			'click #wallapp-act-post'	: 'postMessage'
		},
		
		initialize: function () {
			this.$name = this.$('#wallapp-name');
			this.$message = this.$('#wallapp-message');

			this.$main = this.$('#main');

			this.listenTo(app.messages, 'add', this.addOne);
			this.listenTo(app.messages, 'reset', this.clearAll);			
			this.listenTo(app.messages, 'all', this.render);

			app.messages.fetch({reset:true});
		},
		
		// begin functions
		render: function () {
			if (app.messages.length) {
				this.$main.show();
			} else {
				this.$main.hide();
			}
		},

		addOne: function (message) {
			var view = new app.ContactView({ model: message });
			$('#wall-table-list').append(view.render().el);
		},

		clearAll: function () {
			this.$('#wall-table-list').html('');
			app.messages.each(this.addOne, this);
		},

		
		newAttributes: function () {
			return {
				name: this.$name.val().trim(),
				message: this.$message.val().trim(),
				id: app.messages.nextOrder()
			};
		},

		isFieldEmpty: function() {
			if (this.$name.val().trim() && this.$message.val().trim()) {
				return true;
			}
			return false
		},

		clearField: function() {
			this.$name.val('');
			this.$message.val('');
		},

		postMessage: function (e) {
			if (!this.isFieldEmpty()) {
				return;
			}
			app.messages.create(this.newAttributes());
			this.clearField();
		}		
	});
})(jQuery);
