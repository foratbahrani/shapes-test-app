import { combineReducers } from 'redux';

// all reducers
import shapesReducer from './shapes/shapes.reducers';

// root reducer
const rootReducer = combineReducers({
	shapes: shapesReducer,
});

// export
export default rootReducer;
