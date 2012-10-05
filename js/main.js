(function($) {
	
	requirejs(['Cube', 'faces/Origin', 'faces/Login', 'faces/Register', 'faces/Welcome'], function(cube, origin, login, register, welcome) {
		
		var cube1 = new cube.Cube({el: $('#cube-1'), faceDir: 'faces/1'});
		
		// Setup behaviour
		cube1.on('load', function(face) {
			
			console.log('Face load event ' + cube1.x + ',' + cube1.y);
			
			switch(cube1.x + ',' + cube1.y) {
				case '0,0':
					new origin.Origin({el: face, cube: cube1});
				break;
				case '0,1':
					new login.Login({el: face, cube: cube1});
				break;
				case '0,-1':
					new register.Register({el: face, cube: cube1});
				break;
				case '1,1':
					new welcome.Welcome({el: face, cube: cube1});
				break;
			}
		});
		
		// Load up the first face
		cube1.spinTo(0, 0);
		
		var cube2 = new cube.Cube({el: $('#cube-2'), faceDir: 'faces/2'});
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
		window.cube2 = cube2;
		
	});
	
})(jQuery);
