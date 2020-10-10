import React from 'react';
import Shape from '../Shape/Shape';
import './ItemsGridBoxItem.scss';

const ItemsGridBoxItem = () => {
	return (
		<div className='itemsGridBoxItemContainer'>
			<div className='itemsGridBoxItem'>
				<div className='itemsGridBoxItem-content'>
					<Shape size='lg' color='red' shape='square' />
				</div>
			</div>
		</div>
	);
};

export default ItemsGridBoxItem;
