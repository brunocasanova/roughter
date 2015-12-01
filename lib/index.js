var debug = require( 'debug' )( 'roughter:lib:index' ); debug( 'loaded!' );

// Load Router and Route
var core = require( './core' );

// Load middleware instance
var middleware = require( './middleware' ).middleware;

// Start stack
middleware.initStack();

// Export middleware Router as Router
module.exports.Router = middleware.Router;

// Exports new Router instance as router
module.exports.router = core.router;
