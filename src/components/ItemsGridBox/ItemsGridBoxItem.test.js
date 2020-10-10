import { shallow } from 'enzyme';
import React from 'react';
import ItemsGridBoxItem from './ItemsGridBoxItem';

it('matches snapshot', () => {
	expect(shallow(<ItemsGridBoxItem color='red' shape='rectangle' />)).toMatchSnapshot();
});
