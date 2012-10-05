define(['./Login', './Register', 'exports'], function(login, register, exports) {
	
	var Origin = Backbone.View.extend({
		
		events: {
			'click .login': 'onLoginClick',
			'click .register': 'onRegisterClick'
		},
		
		onLoginClick: function(event) {
			event.preventDefault();
			this.options.cube.spinTo(login.Login.x, login.Login.y, 'down');
		},
		
		onRegisterClick: function(event) {
			event.preventDefault();
			this.options.cube.spinTo(register.Register.x, register.Register.y, 'up');
		}
	});
	
	Origin.x = 0;
	Origin.y = 0;
	
	exports.Origin = Origin;
});

