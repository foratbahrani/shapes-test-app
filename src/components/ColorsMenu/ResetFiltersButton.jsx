import React from 'react';
import { connect } from 'react-redux';
import { resetFilters } from '../../store/shapes/shapes.actions';
import Shape from '../Shape/Shape';
import './ColorsMenuButton.scss';

export const ResetFiltersButton = ({ color, resetFilters }) => {
	return (
		<button className={`colorsMenuButton`} id='button' onClick={() => resetFilters()}>
			<Shape key={color} shape='square' size='sm' />
		</button>
	);
};

const mapDispatchToProps = {
	resetFilters: resetFilters,
};

export default connect(null, mapDispatchToProps)(ResetFiltersButton);
