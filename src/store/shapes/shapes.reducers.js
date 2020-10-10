import ShapesActionTypes from './shapes.types';

export const initialState = {
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
		case ShapesActionTypes.TOGGLE_FILTERED_COLOR:
			var { colors } = state.filters;

			if (colors.includes(payload))
				colors = colors.filter(v => v !== payload);
			else colors = [...colors, payload];

			return {
				...state,
				filters: {
					shapes: [...state.filters.shapes],
					colors,
				},
			};
		case ShapesActionTypes.RESET_FILTERS:
			return {
				...state,
				filters: { ...initialState.filters },
			};
		default:
			return state;
	}
};

export default shapesReducer;
