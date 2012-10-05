define(['Welcome', 'Origin', 'Register'], function(Welcome, Origin, Register) {
	
	var Login = Backbone.View.extend({
		
		events: {
			'click input[type=submit]': 'onLoginClick',
			'click input[type=reset]': 'onCancelClick',
			'click .register': 'onRegisterClick'
		},
		
		onLoginClick: function(event) {
			event.preventDefault();
			this.options.cube.spinTo(Welcome.x, Welcome.y, 'left');
		},
		
		onCancelClick: function(event) {
			this.options.cube.spinTo(Origin.x, Origin.y, 'up');
		},
		
		onRegisterClick: function(event) {
			event.preventDefault();
			this.options.cube.spinTo(Register.x, Register.y, 'up');
		}
	});
	
	Login.x = 0;
	Login.y = 1;
	
	return Login;
});