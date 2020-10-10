import ShapesActionTypes from './shapes.types';

const initialState = {
	data: [],
	isFetching: false,
	error: undefined,
	filters: {
		shapes: ['round', 'square', 'triangle', 'oval', 'rectangle'],
		colors: ['purple', 'red', 'green', 'blue', 'yellow'],
	},
};

const shapesReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ShapesActionTypes.FETCH_SHAPES_START:
			return {
				...state,
				isFetching: true,
			};
		case ShapesActionTypes.FETCH_SHAPES_SUCCESS:
			return {
				...state,
				data: payload,
				error: undefined,
				isFetching: false,
			};
		case ShapesActionTypes.FETCH_SHAPES_FAILURE:
			return {
				...state,
				data: [],
				error: payload,
				isFetching: false,
			};
		case ShapesActionTypes.TOGGLE_FILTERED_SHAPE:
			var { shapes } = state.filters;

			if (shapes.includes(payload))
				shapes = shapes.filter(v => v !== payload);
			else shapes = [...shapes, payload];

			return {
				...state,
				filters: {
					colors: [...state.filters.colors],
					shapes,
				},
			};
		default:
			return state;
	}
};

export default shapesReducer;
