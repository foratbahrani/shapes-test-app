import React from 'react';
import './GridTitleLabel.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
	selectFilteredColors,
	selectFilteredShapes,
} from '../../store/shapes/shapes.selectors';
import { initialState } from '../../store/shapes/shapes.reducers';

const GridTitleLabel = ({ filteredColors, filteredShapes }) => {
	const createTitle = () => {
		const allColorsLength = initialState.filters.colors.length;
		const allShapesLength = initialState.filters.shapes.length;
		const filteredColorsLength = filteredColors.length;
		const filteredShapesLength = filteredShapes.length;

		// no items (either no colors or no shapes are selected)
		const noItems = filteredShapesLength === 0 || filteredColorsLength === 0;
		if (noItems) return 'No items.';

		// single item (exactly one shape AND one color are selected)
		const singleItem =
			filteredColorsLength === 1 && filteredShapesLength === 1;
		if (singleItem) return `${filteredShapes[0]} ${filteredColors[0]} items:`;

		// all items
		const allItems =
			allColorsLength === filteredColorsLength &&
			allShapesLength === filteredShapesLength;
		if (allItems) return 'All items:';

		// one shape & all colors
		const allOneShapeItems =
			filteredShapesLength === 1 && filteredColorsLength === allColorsLength;
		if (allOneShapeItems) return `All ${filteredShapes[0]} items:`;

		// one color & all shapes
		const allOneColorItems =
			filteredColorsLength === 1 && allShapesLength === filteredShapesLength;
		if (allOneColorItems) return `All ${filteredColors[0]} items:`;

		// one shape & multiple colors
		const multipleOneShapeItems =
			filteredShapesLength === 1 && filteredColorsLength > 1;
		if (multipleOneShapeItems) return `Multiple ${filteredShapes[0]} items:`;

		// one color & multiple shapes
		const multipleOneColorItems =
			filteredShapesLength > 1 && filteredColorsLength === 1;
		if (multipleOneColorItems) return `Multiple ${filteredColors[0]} items:`;

		// multiple shapes & colors
		const multipleItems =
			filteredShapesLength > 1 && filteredColorsLength > 1;
		if (multipleItems) return `Multiple items:`;

		// will never reach here
		return 'Error';
	};

	return <span className='GridTitleLabel'>{createTitle()}</span>;
};
const mapStateToProps = createStructuredSelector({
	filteredColors: selectFilteredColors,
	filteredShapes: selectFilteredShapes,
});

export default connect(mapStateToProps)(GridTitleLabel);
