import React from 'react';
import Shape from '../Shape/Shape';
import './ItemsGridBoxItem.scss';

const ItemsGridBoxItem = ({ color, shape }) => {
	return (
		<div className='itemsGridBoxItemContainer'>
			<div className='itemsGridBoxItem'>
				<div className='itemsGridBoxItem-content'>
					<Shape size='lg' color={color} shape={shape} />
				</div>
			</div>
		</div>
	);
};

export default ItemsGridBoxItem;
