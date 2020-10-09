import React from 'react';

const HeaderRefreshButton = () => {
	const refresh = e => {
		e.preventDefault();
		console.log('refresh fired.');
	};

	return (
		<a href='#' onClick={refresh}>
			Refresh
		</a>
	);
};

export default HeaderRefreshButton;
