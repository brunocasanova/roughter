var debug = require( 'debug' )( 'rougther:lib:core:index' ); debug( 'loaded!' );

var Router = require( './router' );
var Route = require( './route' );

// Export Router instance
module.exports.router = Router.construct();
