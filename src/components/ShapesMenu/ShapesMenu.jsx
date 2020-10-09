import React from 'react';
import ShapesMenuButton from './ShapesMenuButton';
import './ShapesMenu.scss';

const ShapesMenu = () => {
	const shapesList = ['round', 'square', 'triangle', 'oval', 'rectangle'];
	const shapesComponents = () =>
		shapesList.map(shape => <ShapesMenuButton key={shape} title={shape} />);

	return <div className='shapesMenu'>{shapesComponents()}</div>;
};

export default ShapesMenu;
