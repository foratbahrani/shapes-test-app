import { call } from 'redux-saga/effects';
import shapesRawData from '../../assets/data';
import ShapesActionTypes from './shapes.types';
const { fetchShapesAsync } = require('./shapes.sagas');

it('pass with valid json', () => {
	const fn = fetchShapesAsync(shapesRawData);
	fn.next();
	const res = fn.next().value.payload.action.type;
	expect(res).toEqual(ShapesActionTypes.FETCH_SHAPES_SUCCESS);
});

it('reject invalid json', () => {
	const fn = fetchShapesAsync('>meh');
	fn.next();
	const res = fn.next().value.payload.action.type;
	expect(res).toEqual(ShapesActionTypes.FETCH_SHAPES_FAILURE);
});
