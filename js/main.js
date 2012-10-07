requirejs(['Cube', 'faces/Origin', 'faces/BidHistory', 'faces/MarketingVehicle', 'faces/VehicleSummary'], function(cube, origin, bidHistory, marketingVehicle, vehicleSummary) {
	
	var $ = jQuery, cube1 = new cube.Cube({el: $('#cube-1')});
	
	cube1.spinTo(new origin.Origin({cube: cube1}));
	
	var cube2 = new cube.Cube({el: $('#cube-2')});
	
	cube2.spinTo(new bidHistory.BidHistory({cube: cube2}));
	
	var cube3 = new cube.Cube({el: $('#cube-3')});
	
	cube3.spinTo(new marketingVehicle.MarketingVehicle({cube: cube3}));
	
	var cube4 = new cube.Cube({el: $('#cube-4')});
	
	cube4.spinTo(new vehicleSummary.VehicleSummary({cube: cube4}));
	
});
