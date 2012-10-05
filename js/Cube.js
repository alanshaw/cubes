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
		
		options: {
			faceDir: 'faces'
		},
		
		x: null,
		y: null,
		faces: null,
		
		initialize: function() {
			this.$el.attr('data-loading', 'false');
			this.x = 0;
			this.y = 0;
			this.faces = {};
		},
		
		/**
		 * Spin the cube in the provided direction
		 *
		 * @param {String} dir Direction to spin the cube: up, down, left, right or null/undefined for no spin
		 */
		spin: function(dir) {
			
			var x = this.x, y = this.y;
			
			// Generate the coordinates for the next face
			switch(dir) {
				case 'up': y--; break;
				case 'down': y++; break;
				case 'left': x++; break;
				case 'right': x--; break;
			}
			
			this.spinTo(x, y, dir);
		},
		
		/**
		 * Spin the cube to the passed coordinates
		 *
		 * @param {int} x The X coord to spin to
		 * @param {int} y The Y coord to spin to
		 * @param {String} dir Direction to spin the cube: up, down, left, right or null/undefined for no spin
		 */
		spinTo: function(x, y, dir) {
			
			var cube = this, $el = cube.$el;
			
			if($el.attr('data-loading') == 'true') return;
			
			$el.attr('data-loading', 'true');
			
			// Get the next face, and then spin the cube
			$.when(cube.getFace(x, y)).then(
				function(face) {
					
					// Update the face coordinates
					cube.x = x;
					cube.y = y;
					
					cube.performSpin(face, dir);
				},
				function() {
					
					alert('No face at ' + x + ',' + y);
					$el.attr('data-loading', 'false');
				}
			);
		},
	
		/**
		 * Spin the cube to a particular face.
		 * 
		 * @param {jQuery} face The face to spin to
		 * @param {String} dir Direction to spin the cube: up, down, left, right or null/undefined for no spin
		 */
		spinToFace: function(face, dir) {
			
			var cube = this, $el = cube.$el;
			
			if($el.attr('data-loading') == 'true') return;
			
			$el.attr('data-loading', 'true');
			
			cube.performSpin(face, dir);
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
		},
		
		/**
		 * Get via AJAX a face to display. This default implementation looks for a ".html" file in the faceDir directory.
		 * 
		 * The HTML is cached and reused if the same face is requested twice.
		 * 
		 * @param {int} x The x coordinate of the face to retrieve
		 * @param {int} y The y coordinate of the face to retrieve
		 * @return {Promise} A promise object that'll eventually be resolved or rejected
		 */
		getFace: function(x, y) {
			
			var $ = jQuery, deferred = $.Deferred(), cube = this;
			
			cube.faces[x] = cube.faces[x] || {};
			
			if(!cube.faces[x][y]) {
				
				console.log('Getting face ' + x + ',' + y);
				
				$.ajax(cube.options.faceDir + '/' + x + ',' + y + '.html', {
					dataType: 'html',
					success: function(html) {
						
						var face = $('<div>' + html + '</div>');
						
						cube.faces[x][y] = face;
						
						deferred.resolve(face);
					},
					error: function() {
						deferred.reject();
					}
				});
				
			} else {
				
				console.log('Getting cached face ' + x + ',' + y);
				
				deferred.resolve(cube.faces[x][y]);
			}
			
			return deferred.promise();
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