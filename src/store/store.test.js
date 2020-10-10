describe('environmental variables', () => {
	test('development mode', () => {
		process.env.NODE_ENV = 'production';
		const middlewares = require('./store').middlewares;
		expect(middlewares.length).toBe(1);
	});
	test('production mode', () => {
		jest.resetModules();
		process.env.NODE_ENV = 'development';
		const middlewares = require('./store').middlewares;
		expect(middlewares.length).toBe(2);
	});
});
