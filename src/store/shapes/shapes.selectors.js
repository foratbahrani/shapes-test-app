import { createSelector } from 'reselect';

const selectShapes = state => state.shapes;

export const selectIsFetching = createSelector(
	[selectShapes],
	shapes => shapes.isFetching
);

export const selectFilteredData = createSelector([selectShapes], shapes =>
	shapes.data.filter(({ shape, color }) => {
		const filteredShapes = shapes.filters.shapes;
		const filteredColors = shapes.filters.colors;
		return filteredShapes.includes(shape) && filteredColors.includes(color);
	})
);

export const selectFilteredShapes = createSelector(
	[selectShapes],
	shapes => shapes.filters.shapes
);

export const selectFilteredColors = createSelector(
	[selectShapes],
	shapes => shapes.filters.colors
);
