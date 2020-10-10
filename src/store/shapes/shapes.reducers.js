import ShapesActionTypes from './shapes.types';

const initialState = {
	data: [],
	isFetching: false,
	error: undefined,
	filter: {
		shapes: [],
		colors: [],
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
		default:
			return state;
	}
};

export default shapesReducer;
