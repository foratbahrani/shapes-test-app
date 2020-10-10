import React from 'react';
import withSpinner from '../../containers/withSpinner/withSpinner';
import { connect } from 'react-redux';
import ItemsGridBoxItem from './ItemsGridBoxItem';
import './ItemsGridBox.scss';
import { createStructuredSelector } from 'reselect';
import { selectFilteredData } from '../../store/shapes/shapes.selectors';

export const ItemsGridBox = ({ data }) => {
	const items = () => {
		return data.map(({ id, color, shape }) => {
			return <ItemsGridBoxItem key={id} color={color} shape={shape} />;
		});
	};

	return (
		<div className='itemsGridBoxContainer'>
			<div className='itemsGridBox'>{items()}</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	data: selectFilteredData,
});

export default withSpinner(connect(mapStateToProps)(ItemsGridBox));
