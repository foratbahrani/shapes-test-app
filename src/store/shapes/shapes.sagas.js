import { all, call, delay, put, takeLatest } from 'redux-saga/effects';
import shapesRawData from '../../assets/data';
import { fetchShapesSuccess } from './shapes.actions';
import ShapesActionTypes from './shapes.types';

export function* fetchShapesAsync() {
	yield delay(1000); // simulates internet connection delay
	// try {
	// 	const json = JSON.parse(shapesRawData);
	// 	yield put(fetchShapesSuccess(json));
	// } catch ({ message }) {
	// 	yield put(fetchShapesFailure(message));
	// }
	const json = JSON.parse(shapesRawData);
	yield put(fetchShapesSuccess(json));
}

export function* fetchShapesStart() {
	yield takeLatest(ShapesActionTypes.FETCH_SHAPES_START, fetchShapesAsync);
}

export function* shapesSagas() {
	yield all([call(fetchShapesStart)]);
}
