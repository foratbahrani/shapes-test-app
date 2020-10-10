import ShapesActionTypes from './shapes.types';
const { fetchShapesAsync } = require('./shapes.sagas');

it('pass with valid json', () => {
	const fn = fetchShapesAsync();
	fn.next();
	const res = fn.next().value.payload.action.type;
	expect(res).toEqual(ShapesActionTypes.FETCH_SHAPES_SUCCESS);
});

// it('reject invalid json', () => {
// 	shapesRawData = 'abas';
// 	const fn = fetchShapesAsync();
// 	fn.next();
// 	const res = fn.next().value.payload.action.type;
// 	expect(res).toEqual(ShapesActionTypes.FETCH_SHAPES_FAILURE);
// });
