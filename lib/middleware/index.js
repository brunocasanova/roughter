var debug = require( 'debug' )( 'rougther:lib:middleware:index' ); debug( 'loaded!' );

// Dependencies
var express = require( 'express' );
var Class = require( 'findhit-class' );

// Modules dependencies
var error = require( './error' );

// Export Class
var Middleware = Class.extend({

	Router: express.Router(),

	initStack: function ( use ){
		// Add Router
		//this.Router.use( use );

		// Add error
		//if( this.options.throw500 || this.options.throw404 ){
			//this.Router.use(
				//! this.options.throw500 && error[ 0 ] ||
				//! this.options.throw404 && error[ 1 ] ||
				//error
			//);
		//}
	},

});

module.exports.Middleware = Middleware;
module.exports.middleware = Middleware.construct();
