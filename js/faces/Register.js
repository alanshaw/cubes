define(['Face', './Welcome', './Origin', 'exports'], function(face, welcome, origin, exports) {
	
	exports.Register = face.Face.extend({
		
		events: {
			'click input[type=submit]': 'onRegisterClick',
			'click input[type=reset]': 'onCancelClick'
		},
		
		onRegisterClick: function(event) {
			event.preventDefault();
			this.options.cube.spinTo(new welcome.Welcome({cube: this.options.cube}), 'left');
		},
		
		onCancelClick: function(event) {
			this.options.cube.spinTo(new origin.Origin({cube: this.options.cube}), 'down');
		},
		
		getFaceUrl: function() {
			return 'faces/1/0,-1.html';
		}
	});
});