/**
 * Depends:
 * Backbone
 * jQuery
 * 
 * Events: 
 * load - after a face has been loaded and inserted into the cube, before it is animated onscreen
 * show - after a face has been animated onscreen
 * hide - after a face has been animated offscreen
 */
define(function(require, exports) {
	
	var Cube = Backbone.View.extend({
		
		initialize: function() {
			this.$el.attr('data-loading', 'false');
		},
		
		/**
		 * Spin the cube to the passed Face
		 *
		 * @param {Face} face The face to spin to 
		 * @param {String} dir Direction to spin the cube: up, down, left, right or null/undefined for no spin
		 */
		spinTo: function(face, dir) {
			
			var cube = this, $el = cube.$el;
			
			if($el.attr('data-loading') == 'true') return;
			
			$el.attr('data-loading', 'true');
			
			// Get the next face, and then spin the cube
			$.when(face.getFace()).then(
				function(el) {
					cube.performSpin(el, dir);
				},
				function() {
					alert('No face at ' + face.getFaceUrl());
					$el.attr('data-loading', 'false');
				}
			);
		},
		
		/**
		 * @private
		 * @param {jQuery} face The face to spin to
		 * @param {String} dir Direction to spin the cube: up, down, left, right or null/undefined for no spin
		 */
		performSpin: function(face, dir) {
			
			var cube = this, $el = cube.$el;
			
			// Get the current face so it can be removed after the animation
			var currentFace = $('> div', $el);
			
			if(dir) {
				
				// Add the correct face name class so it can be positioned correctly using CSS
				face.removeClass('front').addClass(Cube.nextFaceName[dir]);
				
				// Add the next face to the cube
				$el.append(face);
				
				if(!face.data('cube-loaded')) {
					
					cube.trigger('load', face);
					
					face.data('cube-loaded', true);
				}
				
				// Start spinning (using CSS3 3D transforms)
				$el.attr('data-spinning', dir);
				
				// After the animation has finished, remove the old face
				setTimeout(function() {
					
					$el.attr('data-spinning', 'none');
					
					currentFace.remove();
					
					cube.trigger('hide', currentFace);
					
					face.removeClass(Cube.nextFaceName[dir]).addClass('front');
					
					cube.trigger('show', face);
					
					$el.attr('data-loading', 'false');
					
				}, 1000);
			
			} else {
				
				// Add the correct face name class so it can be positioned correctly using CSS
				face.addClass('front');
				
				// Add the next face to the cube
				$el.append(face);
				
				if(!face.data('cube-loaded')) {
					
					cube.trigger('load', face);
					
					face.data('cube-loaded', true);
				}
				
				currentFace.remove();
				
				cube.trigger('hide', currentFace);
				
				cube.trigger('show', face);
				
				$el.attr('data-loading', 'false');
			}
		}
	});
	
	Cube.nextFaceName = {
		up: 'bottom',
		down: 'top',
		left: 'right',
		right: 'left'
	};
	
	exports.Cube = Cube;
});