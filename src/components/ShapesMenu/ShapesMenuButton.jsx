import React from 'react';
import './ShapesMenuButton.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectFilteredShapes } from '../../store/shapes/shapes.selectors';
import { toggleFilteredShape } from '../../store/shapes/shapes.actions';

const ShapesMenuButton = ({ title, filteredShapes, toggleFilteredShape }) => {
	const isActive = filteredShapes.includes(title)
		? 'shapesMenuButton--active'
		: null;
	return (
		<button
			className={`shapesMenuButton ${
				isActive ? 'shapesMenuButton--active' : undefined
			}`}
			onClick={() => toggleFilteredShape(title)}>
			{title}
		</button>
	);
};

const mapStateToProps = createStructuredSelector({
	filteredShapes: selectFilteredShapes,
});

const mapDispatchToProps = {
	toggleFilteredShape: toggleFilteredShape,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShapesMenuButton);
