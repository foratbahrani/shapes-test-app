import React from 'react';
import './ColorsMenu.scss';
import ColorsMenuButton from './ColorsMenuButton';
import ResetFiltersButton from './ResetFiltersButton';

const ColorsMenu = () => {
	const colorsList = ['purple', 'red', 'green', 'blue', 'yellow'];
	const colorsComponents = colorsList.map(color => (
		<ColorsMenuButton key={color} color={color} />
	));
	return (
		<div className='colorsMenu'>
			{colorsComponents}
			<ResetFiltersButton />
		</div>
	);
};

export default ColorsMenu;
