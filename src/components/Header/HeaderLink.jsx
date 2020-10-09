import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const HeaderLink = ({ to, children, history }) => {
	console.log(history);
	const { pathname } = history.location;
	const getClassName = () => (pathname.includes(to) ? 'active' : '');

	return (
		<Link to={to} className={getClassName()}>
			{children}
		</Link>
	);
};

export default withRouter(HeaderLink);
