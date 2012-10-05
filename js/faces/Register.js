define(['Welcome', 'Origin'], function(Welcome, Origin) {
	
	var Register = Backbone.View.extend({
		
		events: {
			'click input[type=submit]': 'onRegisterClick',
			'click input[type=reset]': 'onCancelClick'
		},
		
		onRegisterClick: function(event) {
			event.preventDefault();
			this.options.cube.spinTo(Welcome.x, Welcome.y, 'left');
		},
		
		onCancelClick: function(event) {
			this.options.cube.spinTo(Origin.x, Origin.y, 'down');
		}
	});
	
	Register.x = 0;
	Register.y = -1;
	
	return Register;
});