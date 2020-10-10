import React from 'react';
import './ShapesMenuButton.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectFilteredShapes } from '../../store/shapes/shapes.selectors';
import { toggleFilteredShape } from '../../store/shapes/shapes.actions';
import Shape from '../Shape/Shape';

const ShapesMenuButton = ({ title, filteredShapes, toggleFilteredShape }) => {
	const isActive = filteredShapes.includes(title)
		? 'shapesMenuButton--active'
		: null;
	return (
		<button
			className={`shapesMenuButton ${isActive}`}
			onClick={() => toggleFilteredShape(title)}>
			<span className='lg'>{title}</span>
			<span className='md'>
				<Shape size='sm' shape={title} color={isActive ? 'black' : null} />
			</span>
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
