define(['Login', 'Register'], function(Login, Register) {
	
	var Origin = Backbone.View.extend({
		
		events: {
			'click .login': 'onLoginClick',
			'click .register': 'onRegisterClick'
		},
		
		onLoginClick: function(event) {
			event.preventDefault();
			this.options.cube.spinTo(Login.x, Login.y, 'down');
		},
		
		onRegisterClick: function(event) {
			event.preventDefault();
			this.options.cube.spinTo(Register.x, Register.y, 'up');
		}
	});
	
	Origin.x = 0;
	Origin.y = 0;
	
	return Origin;
});

