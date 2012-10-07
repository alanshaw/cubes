define(['Face', './Login', './Register', 'exports'], function(face, login, register, exports) {
	
	exports.Origin = face.Face.extend({
		
		events: {
			'click .login': 'onLoginClick',
			'click .register': 'onRegisterClick'
		},
		
		onLoginClick: function(event) {
			event.preventDefault();
			this.options.cube.spinTo(new login.Login({cube: this.options.cube}), 'down');
		},
		
		onRegisterClick: function(event) {
			event.preventDefault();
			this.options.cube.spinTo(new register.Register({cube: this.options.cube}), 'up');
		},
		
		getFaceUrl: function() {
			return 'faces/Origin.html';
		}
	});
});

