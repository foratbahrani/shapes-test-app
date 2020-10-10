import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

it('matches snapshot', () => {
	expect(shallow(<Header />)).toMatchSnapshot();
});
