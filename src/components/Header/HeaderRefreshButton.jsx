import React from 'react';

const HeaderRefreshButton = () => {
	const refresh = () => {
		console.log('refresh fired.');
	};

	return (
		<button className='refreshButton' onClick={refresh}>
			Refresh
		</button>
	);
};

export default HeaderRefreshButton;
