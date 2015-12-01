var debug = require( 'debug' )( 'rougther:lib:core:router' ); debug( 'loaded!' );

// Dependencies
var Util = require( 'findhit-util' );
var Class = require( 'findhit-class' );
var defaults = require( '../defaults' );
var Route = require( './route' );

// Exporting Class
module.exports = Class.extend({

	options: defaults.router,

	// Save all routes
	Routes: [],

	// Initialize router
	initialize: function () {
		debug( 'Router initialized...' );
	},

	addStack: function ( args ){
		debug( 'Add stack to Router...' );

		if(
			! args ||
			Object.keys( arguments ).length != 1 ||
			Util.isnt.Object( args )
		){
			throw new Error( 'Router arguments aren\'t accepted to initialize!' );
		}

		// Apply default options
		args.options.__proto__ = this.options;

		// Apply options
		this.options = args.options;

		if( this.options && Util.is.Object( this.options ) ){

			if( ! this.options.url || Util.isnt.String( this.options.url ) ){
				throw new Error( 'Need url to initialize this.options!' );
			}

			var title = this.options.url.replace( '/', '' );

			if( ! this.options.title ){
				this.options.title = Util.String.capitalize( title );
			}

		}

		this.routes =
			args.routes && Util.is.Array( args.routes ) && args.routes.length > 0 && args.routes ||
			{};

		if( ! Object.keys( this.routes ).length ){
			throw new Error( 'Need valid options to initialize Route!' );
		}

		var self = this;

		this.routes.forEach(function ( route ){

			// Set title in Route
			route.title =
				self.options && self.options.title && [
					self.options.title, '|', route.title
				].join( ' ' );

			if( ! Object.keys( route ).length && Util.isnt.Object( route ) ){
				throw new Error( 'Need valid options to initialize Route!' );
			}

			//self.Routes.push( Route.construct( route ) );

		});

		//this.addRoutes( this.Routes );

	},

});
