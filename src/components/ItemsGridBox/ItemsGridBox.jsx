import React from 'react';
import withSpinner from '../../containers/withSpinner/withSpinner';
import './ItemsGridBox.scss';
import ItemsGridBoxItem from './ItemsGridBoxItem';

const ItemsGridBox = () => {
	return (
		<div className='itemsGridBoxContainer'>
			<div className='itemsGridBox'>
				<ItemsGridBoxItem />
				<ItemsGridBoxItem />
				<ItemsGridBoxItem />
				<ItemsGridBoxItem />
				<ItemsGridBoxItem />
				<ItemsGridBoxItem />
				<ItemsGridBoxItem />
				<ItemsGridBoxItem />
				<ItemsGridBoxItem />
				<ItemsGridBoxItem />
				<ItemsGridBoxItem />
			</div>
		</div>
	);
};

export default withSpinner(ItemsGridBox);
