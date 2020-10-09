import React from 'react';
import Shape from '../Shape/Shape';

const ColorsMenuButton = ({ color }) => {
	return <Shape key={color} color={color} shape='square' size='sm' />;
};

export default ColorsMenuButton;
