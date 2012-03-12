//configuration


require.config({	
	/* baseUrl: '../', */
	
	paths: {		
		jquery: 'libs/jquery-1.7.1.min',
		underscore: 'libs/backbone/underscore-amd.min',
		backbonejs: 'libs/backbone/backbone-amd.min',
		text: 'libs/requirejs/text'
	}

});


require([
	'jquery', 
	'underscore', 
	'backbonejs', 
	'app-view' 
], function( $, _, Backbone, AppView ){
	
	// Instantiate our App
	new AppView({
		el: $('.container')
	});

	
});