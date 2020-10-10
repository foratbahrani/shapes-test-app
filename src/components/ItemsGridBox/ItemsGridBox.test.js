import { shallow } from 'enzyme';
import React from 'react';
import { ItemsGridBox } from './ItemsGridBox';

it('matches snapshot', () => {
	expect(
		shallow(<ItemsGridBox data={[{ id: 1, color: 'red', shape: 'square' }]} />)
	).toMatchSnapshot();
});
