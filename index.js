var debug = require( 'debug' )( 'roughter:index' ); debug( 'Initializing Roughter...' );

var Router = require( './lib/core/router' );


// Export middleware
module.exports = require( './lib' );
