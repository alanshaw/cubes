define(['Login'], function(Login) {
	
	var Welcome = Backbone.View.extend({
		
		events: {
			'click .logout': 'onLogoutClick'
		},
		
		onLogoutClick: function(event) {
			event.preventDefault();
			this.options.cube.spinTo(Login.x, Login.y, 'right');
		}
	});
	
	Welcome.x = 1;
	Welcome.y = 1;
	
});