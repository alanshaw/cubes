define(['./Welcome', './Origin', 'exports'], function(welcome, origin, exports) {
	
	var Register = Backbone.View.extend({
		
		events: {
			'click input[type=submit]': 'onRegisterClick',
			'click input[type=reset]': 'onCancelClick'
		},
		
		onRegisterClick: function(event) {
			event.preventDefault();
			this.options.cube.spinTo(welcome.Welcome.x, welcome.Welcome.y, 'left');
		},
		
		onCancelClick: function(event) {
			this.options.cube.spinTo(origin.Origin.x, origin.Origin.y, 'down');
		}
	});
	
	Register.x = 0;
	Register.y = -1;
	
	exports.Register = Register;
});