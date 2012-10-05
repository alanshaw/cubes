define(['exports'], function(exports) {
	
	exports.Face = Backbone.View.extend({
		
		/**
		 * Get via AJAX a face to display.
		 * 
		 * The HTML is cached and reused if the same face is requested twice.
		 * 
		 * @return {Promise} A promise object that'll eventually be resolved or rejected
		 */
		getFace: function() {
			
			var $ = jQuery, deferred = $.Deferred(), face = this, faceUrl = face.getFaceUrl();
			
			if(!face.cached) {
				
				console.log('Getting face ' + faceUrl);
				
				$.ajax(faceUrl, {
					dataType: 'html',
					success: function(html) {
						
						face.setElement(face.setupFace(html));
						
						face.cached = true;
						
						deferred.resolve(face.$el);
					},
					error: function() {
						deferred.reject();
					}
				});
				
			} else {
				
				console.log('Getting cached face ' + faceUrl);
				
				deferred.resolve(face.$el);
			}
			
			return deferred.promise();
		},
		
		/**
		 * URL to get the face HTML or template from
		 * 
		 * @return {String}
		 */
		getFaceUrl: function() {
			return 'faces/face.html';
		},
		
		/**
		 * @param {String} html The raw HTML string from the server
		 * @return {jQuery} A jQuery instance containing the face html
		 */
		setupFace: function(html) {
			return $('<div>' + html + '</div>');
		}
	});
});



