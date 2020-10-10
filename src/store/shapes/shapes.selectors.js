import { createSelector } from 'reselect';

const selectShapes = state => state.shapes;

export const selectIsFetching = createSelector(
	[selectShapes],
	shapes => shapes.isFetching
);
