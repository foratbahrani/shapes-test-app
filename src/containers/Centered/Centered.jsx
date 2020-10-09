import React from 'react';
import './Centered.scss';

const Centered = props => {
	const { children, ...otherProps } = props;
	return (
		<div className='centered' {...otherProps}>
			{children}
		</div>
	);
};

export default Centered;
