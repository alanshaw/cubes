requirejs(['Cube', 'faces/Origin'], function(cube, origin) {
	
	var $ = jQuery, cube1 = new cube.Cube({el: $('#cube-1')});
	
	cube1.spinTo(new origin.Origin({cube: cube1}));
	
	/*// Load up the first face
	cube1.spinTo(0, 0);
	
	var cube2 = new cube.Cube({el: $('#cube-2')});
	var cube2x = 0;
	
	setTimeout(function updateBid() {
		
		if(cube2x < 5) {
			
			cube2x++;
			
			cube2.spinTo(cube2x, 0, 'left');
			
			setTimeout(updateBid, Math.floor((Math.random()*10000)+2000));
		}
		
	}, 5000);
	
	// Load up the first face
	cube2.spinTo(cube2x, 0);
	
	window.cube1 = cube1;
	window.cube2 = cube2;*/
	
});
