module.exports = {

	router: {

		title: undefined,
		url: undefined,

		// throw errors
		throw404: true,
		throw500: true,

		// accepted methods
		METHODS: [ 'get', 'post', 'put', 'delete', 'all' ],

	},

	route: {
		title: undefined,
		name: undefined,
		url: [],
		method: 'get',
	},

};
