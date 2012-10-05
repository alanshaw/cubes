define(['./Welcome', './Origin', './Register', 'exports'], function(welcome, origin, register, exports) {
	
	var Login = Backbone.View.extend({
		
		events: {
			'click input[type=submit]': 'onLoginClick',
			'click input[type=reset]': 'onCancelClick',
			'click .register': 'onRegisterClick'
		},
		
		onLoginClick: function(event) {
			event.preventDefault();
			this.options.cube.spinTo(welcome.Welcome.x, welcome.Welcome.y, 'left');
		},
		
		onCancelClick: function(event) {
			this.options.cube.spinTo(origin.Origin.x, origin.Origin.y, 'up');
		},
		
		onRegisterClick: function(event) {
			event.preventDefault();
			this.options.cube.spinTo(register.Register.x, register.Register.y, 'up');
		}
	});
	
	Login.x = 0;
	Login.y = 1;
	
	exports.Login = Login;
});