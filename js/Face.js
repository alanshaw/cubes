define(['exports'], function(exports) {
	
	var htmlCache = {};
	
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
				
				if(htmlCache[faceUrl]) {
					
					console.log('Setting up from cached ' + faceUrl);
					
					face.setElement(face.setupFace(htmlCache[faceUrl]));
					
					face.cached = true;
					
					deferred.resolve(face.$el);
					
				} else {
					
					console.log('Getting face from ' + faceUrl);
					
					$.ajax(faceUrl, {
						dataType: 'html',
						success: function(html) {
							
							htmlCache[faceUrl] = html;
							
							face.setElement(face.setupFace(html));
							
							face.cached = true;
							
							deferred.resolve(face.$el);
						},
						error: function() {
							deferred.reject();
						}
					});
				}
				
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



