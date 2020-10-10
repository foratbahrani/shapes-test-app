import { shallow } from 'enzyme';
import React from 'react';
import ColorsMenu from './ColorsMenu';

it('matches snapshot', () => {
	expect(shallow(<ColorsMenu />)).toMatchSnapshot();
});
