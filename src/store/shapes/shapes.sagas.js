import { Provider } from 'react-redux';
import { all, call, delay, put, takeLatest } from 'redux-saga/effects';
import shapesRawData from '../../assets/data';
import { fetchShapesFailure, fetchShapesSuccess } from './shapes.actions';
import ShapesActionTypes from './shapes.types';

export function* fetchShapesAsync() {
	yield delay(1000); // simulates internet connection delay
	const rawData = shapesRawData;
	try {
		const json = JSON.parse(rawData);
		yield put(fetchShapesSuccess(json));
	} catch ({ message }) {
		yield put(fetchShapesFailure(message));
	}
}

export function* fetchShapesStart() {
	yield takeLatest(ShapesActionTypes.FETCH_SHAPES_START, fetchShapesAsync);
}

export function* shapesSagas() {
	yield all([call(fetchShapesStart)]);
}
