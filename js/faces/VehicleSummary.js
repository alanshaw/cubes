define(['Face', 'faces/SellerProfile', 'faces/DamageDesc', 'faces/SellerMap', 'faces/FullSpec', 'exports'], function(face, sellerProfile, damageDesc, sellerMap, fullSpec, exports) {
	
	exports.VehicleSummary = face.Face.extend({
		
		events: {
			'click nav .top a': 'onTopClick',
			'click nav .right a': 'onRightClick',
			'click nav .bottom a': 'onBottomClick',
			'click nav .left a': 'onLeftClick'
		},
		
		onTopClick: function(event) {
			event.preventDefault();
			// Hide the navigation because in FF it messes with the 3D animation
			$('nav', this.el).css('display', 'none');
			this.options.cube.spinTo(new sellerProfile.SellerProfile({cube: this.options.cube}), 'down');
		},
		
		onRightClick: function(event) {
			event.preventDefault();
			// Hide the navigation because in FF it messes with the 3D animation
			$('nav', this.el).css('display', 'none');
			this.options.cube.spinTo(new damageDesc.DamageDesc({cube: this.options.cube}), 'left');
		},
		
		onLeftClick: function(event) {
			event.preventDefault();
			// Hide the navigation because in FF it messes with the 3D animation
			$('nav', this.el).css('display', 'none');
			this.options.cube.spinTo(new fullSpec.FullSpec({cube: this.options.cube}), 'right');
		},
		
		onBottomClick: function(event) {
			event.preventDefault();
			// Hide the navigation because in FF it messes with the 3D animation
			$('nav', this.el).css('display', 'none');
			this.options.cube.spinTo(new sellerMap.SellerMap({cube: this.options.cube}), 'up');
		},
		
		setupFace: function(html) {
			
			var $ = jQuery, face = $('<div>' + html + '</div>');
			
			$('nav a', face).each(function() {
				// TODO: Setup tooltips in here?
				$(this).attr('title', $(this).text());
			});
			
			return face;
		},
		
		getFaceUrl: function() {
			return 'faces/VehicleSummary.html';
		}
	});
});