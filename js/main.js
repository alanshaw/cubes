requirejs(['Cube', 'faces/Origin', 'faces/BidHistory'], function(cube, origin, bidHistory) {
	
	var $ = jQuery, cube1 = new cube.Cube({el: $('#cube-1')});
	
	cube1.spinTo(new origin.Origin({cube: cube1}));
	
	var cube2 = new cube.Cube({el: $('#cube-2')});
	
	cube2.spinTo(new bidHistory.BidHistory({cube: cube2}));
	
});
