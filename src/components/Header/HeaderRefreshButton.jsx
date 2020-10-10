import React from 'react';
import { connect } from 'react-redux';
import { fetchShapesStart } from '../../store/shapes/shapes.actions';

const HeaderRefreshButton = ({ refreshShapes }) => {
	return (
		<button className='refreshButton shrink' onClick={refreshShapes}>
			Refresh
		</button>
	);
};

const mapDispatchToProps = {
	refreshShapes: fetchShapesStart,
};

export default connect(null, mapDispatchToProps)(HeaderRefreshButton);
