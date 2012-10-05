define(['./Login', 'exports'], function(login, exports) {
	
	var Welcome = Backbone.View.extend({
		
		events: {
			'click .logout': 'onLogoutClick'
		},
		
		onLogoutClick: function(event) {
			event.preventDefault();
			this.options.cube.spinTo(login.Login.x, login.Login.y, 'right');
		}
	});
	
	Welcome.x = 1;
	Welcome.y = 1;
	
	exports.Welcome = Welcome;
});