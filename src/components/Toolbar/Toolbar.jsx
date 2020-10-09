import React from 'react';
import ColorsMenu from '../ColorsMenu/ColorsMenu';
import ShapesMenu from '../ShapesMenu/ShapesMenu';
import './Toolbar.scss';

const Toolbar = () => (
	<div className='toolbar'>
		<ShapesMenu />
		<ColorsMenu />
	</div>
);

export default Toolbar;
