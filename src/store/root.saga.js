import { all, call } from 'redux-saga/effects';
import { shapesSagas } from './shapes/shapes.sagas';

export default function* rootSaga() {
	yield all([call(shapesSagas)]);
}
