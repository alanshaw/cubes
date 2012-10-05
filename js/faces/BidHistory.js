define(['Face', 'exports'], function(face, exports) {
	
	exports.BidHistory = face.Face.extend({
		
		initialize: function() {
			
			var face = this, 
				i = face.options.i ? face.options.i : (face.options.i = 0);
			
			setTimeout(function() {
				
				var cube = face.options.cube;
				
				if(i < 5) {
					cube.spinTo(new exports.BidHistory({i: i + 1, cube: cube}), 'left');
				}
				
			}, Math.floor((Math.random()*10000)+2000));
		},
		
		getFaceUrl: function() {
			return 'faces/2/' + this.options.i + ',0.html';
		}
	});
});