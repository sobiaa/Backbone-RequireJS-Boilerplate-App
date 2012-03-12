define([
	'jquery',
	'underscore',
	'backbonejs',

	'app-collection',

	'text!app-template.tmpl' ],
       
	function( $, _, Backbone, DataFeed, Template ) {

		var AppView = Backbone.View.extend({

			events: {
			},

			initialize: function() {

				//Template
				this.template = _.template( Template );
				
				//Data
				this.dataFeed = new DataFeed();
				this.dataFeed.loadData(
					'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?',
					{
						format : 'json',
						tags : 'boat'
					},
					
					// Don't lose the context
					$.proxy( this.handleSuccess, this),
					$.proxy( this.handleFailure, this)
				);
				
			},

			handleSuccess: function( data ) {
			
				this.$el.html( this.template({
					data: data.items
				}) );
														
			},

			handleFailure: function( error ) {
				
				console.log( error )
			}
		});

		return AppView;
});

