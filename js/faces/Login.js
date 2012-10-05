define(['Face', './Welcome', './Origin', './Register', 'exports'], function(face, welcome, origin, register, exports) {
	
	exports.Login = face.Face.extend({
		
		events: {
			'click input[type=submit]': 'onLoginClick',
			'click input[type=reset]': 'onCancelClick',
			'click .register': 'onRegisterClick'
		},
		
		onLoginClick: function(event) {
			event.preventDefault();
			this.options.cube.spinTo(new welcome.Welcome({cube: this.options.cube}), 'left');
		},
		
		onCancelClick: function(event) {
			this.options.cube.spinTo(new origin.Origin({cube: this.options.cube}), 'up');
		},
		
		onRegisterClick: function(event) {
			event.preventDefault();
			this.options.cube.spinTo(new register.Register({cube: this.options.cube}), 'up');
		},
		
		getFaceUrl: function() {
			return 'faces/1/0,1.html';
		}
	});
});