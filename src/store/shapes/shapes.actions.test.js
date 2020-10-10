import * as actions from './shapes.actions';
import ShapesActionTypes from './shapes.types';

it('fetchShapesStart', () => {
	const valid = {
		type: ShapesActionTypes.FETCH_SHAPES_START,
	};
	expect(actions.fetchShapesStart()).toEqual(valid);
});

it('fetchShapesSuccess', () => {
	const valid = {
		type: ShapesActionTypes.FETCH_SHAPES_SUCCESS,
		payload: 'hi',
	};
	expect(actions.fetchShapesSuccess('hi')).toEqual(valid);
});

it('fetchShapesFailure', () => {
	const valid = {
		type: ShapesActionTypes.FETCH_SHAPES_FAILURE,
		payload: 'hi',
	};
	expect(actions.fetchShapesFailure('hi')).toEqual(valid);
});

it('toggleFilteredShape', () => {
	const valid = {
		type: ShapesActionTypes.TOGGLE_FILTERED_SHAPE,
		payload: 'hi',
	};
	expect(actions.toggleFilteredShape('hi')).toEqual(valid);
});

it('toggleFilteredColor', () => {
	const valid = {
		type: ShapesActionTypes.TOGGLE_FILTERED_COLOR,
		payload: 'hi',
	};
	expect(actions.toggleFilteredColor('hi')).toEqual(valid);
});

it('resetFilters', () => {
	const valid = {
		type: ShapesActionTypes.RESET_FILTERS,
	};
	expect(actions.resetFilters()).toEqual(valid);
});
