import React from 'react';
import './ShapesMenuButton.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectFilteredShapes } from '../../store/shapes/shapes.selectors';
import { toggleFilteredShape } from '../../store/shapes/shapes.actions';
import Shape from '../Shape/Shape';

export const ShapesMenuButton = ({ title, filteredShapes, toggleFilteredShape }) => {
	const isActive = filteredShapes.includes(title) ? 'shapesMenuButton--active' : '';
	return (
		<button
			className={`shapesMenuButton ${isActive} shrink`}
			id='button'
			onClick={() => toggleFilteredShape(title)}>
			<span className='lg'>{title}</span>
			<span className='md'>
				<Shape id='shape' size='sm' shape={title} color={isActive ? 'black' : ''} />
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
