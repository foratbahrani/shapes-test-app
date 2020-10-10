import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectFilteredColors } from '../../store/shapes/shapes.selectors';
import { toggleFilteredColor } from '../../store/shapes/shapes.actions';
import Shape from '../Shape/Shape';
import './ColorsMenuButton.scss';

const ColorsMenuButton = ({ color, filteredColors, toggleFilteredColor }) => {
	const isActive = filteredColors.includes(color);
	return (
		<button
			className={`colorsMenuButton`}
			onClick={() => toggleFilteredColor(color)}>
			<Shape
				key={color}
				color={color}
				shape='square'
				size='sm'
				isActive={isActive}
			/>
		</button>
	);
};

const mapStateToProps = createStructuredSelector({
	filteredColors: selectFilteredColors,
});

const mapDispatchToProps = {
	toggleFilteredColor: toggleFilteredColor,
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorsMenuButton);
