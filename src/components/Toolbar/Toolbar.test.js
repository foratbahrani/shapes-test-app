import { shallow } from 'enzyme';
import React from 'react';
import Toolbar from './Toolbar';

it('matches snapshot', () => {
	expect(shallow(<Toolbar />)).toMatchSnapshot();
});
