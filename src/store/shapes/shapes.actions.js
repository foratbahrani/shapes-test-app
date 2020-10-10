import ShapesActionTypes from './shapes.types';

export const fetchShapesStart = () => ({
	type: ShapesActionTypes.FETCH_SHAPES_START,
});

export const fetchShapesSuccess = payload => ({
	type: ShapesActionTypes.FETCH_SHAPES_SUCCESS,
	payload,
});

export const fetchShapesFailure = payload => ({
	type: ShapesActionTypes.FETCH_SHAPES_FAILURE,
	payload,
});
