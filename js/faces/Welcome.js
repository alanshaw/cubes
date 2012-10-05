define(['Face', './Login', 'exports'], function(face, login, exports) {
	
	exports.Welcome = face.Face.extend({
		
		events: {
			'click .logout': 'onLogoutClick'
		},
		
		onLogoutClick: function(event) {
			event.preventDefault();
			this.options.cube.spinTo(new login.Login({cube: this.options.cube}), 'right');
		},
		
		getFaceUrl: function() {
			return 'faces/1/1,1.html';
		}
	});
});