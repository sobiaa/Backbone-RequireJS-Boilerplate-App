define([
	
	'jquery', 
	'underscore', 
	'backbonejs',
	
	'./app-model'
	
], function( $, _, Backbone, AppModel ) {

	var DataFeed = Backbone.Collection.extend({  
		
		model: AppModel, 
				
		loadData: function( url, params, success, error ) {
			
			$.ajax({
				url: url,
				data: params,
				dataType: 'jsonp',
				success: success,
				error: error
			});
			
		}
		
		 
	}); 

	return DataFeed;
});


