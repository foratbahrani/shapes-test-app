const { default: shapesRawData } = require('../../assets/data');
const { initialState } = require('./shapes.reducers');
const { selectFilteredData } = require('./shapes.selectors');

it('filters correctly', () => {
	const state = {
		shapes: {
			...initialState,
			data: [...JSON.parse(shapesRawData)],
			filters: { shapes: ['square'], colors: ['red'] },
		},
	};
	expect(selectFilteredData(state)).toEqual([
		{
			color: 'red',
			id: 8,
			shape: 'square',
		},
	]);
});
