import React from 'react';
import './Container.scss';
const Container = ({ children, size }) => {
	return <div className={`container--${size}`}>{children}</div>;
};

export default Container;
