define(['Face', 'exports'], function(face, exports) {
	
	exports.VehicleSummary = face.Face.extend({
		
		setupFace: function(html) {
			
			var $ = jQuery;
			
			var face = $('<div>' + html + '</div>');
			
			$('nav a', face).each(function() {
				// TODO: Put tooltips in here?
			});
			
			return face;
		},
		
		getFaceUrl: function() {
			return 'faces/VehicleSummary.html';
		}
	});
});