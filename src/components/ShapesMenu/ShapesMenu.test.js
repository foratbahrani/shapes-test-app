import { shallow } from 'enzyme';
import React from 'react';
import ShapesMenu from './ShapesMenu';

it('matches snapshot', () => {
	expect(shallow(<ShapesMenu />)).toMatchSnapshot();
});
