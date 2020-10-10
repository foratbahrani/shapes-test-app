import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Spinner from '../../components/Spinner/Spinner';
import { selectIsFetching } from '../../store/shapes/shapes.selectors';
import Centered from '../Centered/Centered';

const withSpinner = WrappedComponent => {
	const fallback = () => (
		<Centered>
			<Spinner />
		</Centered>
	);

	const HOC = ({ isLoading }) =>
		isLoading ? fallback() : <WrappedComponent />;

	const mapStateToProps = createStructuredSelector({
		isLoading: selectIsFetching,
	});

	return connect(mapStateToProps)(HOC);
};

export default withSpinner;
