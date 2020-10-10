import reducers, { initialState } from './shapes.reducers';
import ShapesActionTypes from './shapes.types';

it('returns initial state', () => {
	expect(reducers(undefined, {})).toEqual(initialState);
});

it('FETCH_SHAPES_START', () => {
	expect(reducers(undefined, { type: ShapesActionTypes.FETCH_SHAPES_START })).toEqual({
		...initialState,
		isFetching: true,
	});
});

it('FETCH_SHAPES_SUCCESS', () => {
	expect(
		reducers(undefined, { type: ShapesActionTypes.FETCH_SHAPES_SUCCESS, payload: 'hi' })
	).toEqual({
		...initialState,
		isFetching: false,
		error: undefined,
		data: 'hi',
	});
});

it('FETCH_SHAPES_FAILURE', () => {
	expect(
		reducers(undefined, { type: ShapesActionTypes.FETCH_SHAPES_FAILURE, payload: 'hi' })
	).toEqual({
		...initialState,
		isFetching: false,
		error: 'hi',
		data: [],
	});
});

it('TOGGLE_FILTERED_SHAPE', () => {
	// remove
	const valid = initialState.filters.shapes.filter(v => v !== 'square');
	let reducerNewState = reducers(undefined, {
		type: ShapesActionTypes.TOGGLE_FILTERED_SHAPE,
		payload: 'square',
	});
	expect(reducerNewState.filters.shapes).toEqual(valid);

	// add again
	valid.push('square');
	reducerNewState = reducers(reducerNewState, {
		type: ShapesActionTypes.TOGGLE_FILTERED_SHAPE,
		payload: 'square',
	});
	expect(reducerNewState.filters.shapes).toEqual(valid);
});

it('TOGGLE_FILTERED_COLOR', () => {
	// remove
	const valid = initialState.filters.colors.filter(v => v !== 'red');
	let reducerNewState = reducers(undefined, {
		type: ShapesActionTypes.TOGGLE_FILTERED_COLOR,
		payload: 'red',
	});
	expect(reducerNewState.filters.colors).toEqual(valid);

	// add again
	valid.push('red');
	reducerNewState = reducers(reducerNewState, {
		type: ShapesActionTypes.TOGGLE_FILTERED_COLOR,
		payload: 'red',
	});
	expect(reducerNewState.filters.colors).toEqual(valid);
});

it('RESET_FILTERS', () => {
	const reducerNewState = reducers(
		{},
		{
			type: ShapesActionTypes.RESET_FILTERS,
		}
	);
	expect(reducerNewState.filters).toEqual(initialState.filters);
});

it('default case', () => {
	const reducerNewState = reducers(undefined, {
		type: 'meh',
	});
	expect(reducerNewState).toEqual(initialState);
});
