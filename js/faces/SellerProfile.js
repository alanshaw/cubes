define(['Face', 'exports'], function(face, exports) {
	
	exports.SellerProfile = face.Face.extend({
		
		getFaceUrl: function() {
			return 'faces/SellerProfile.html';
		}
	});
});