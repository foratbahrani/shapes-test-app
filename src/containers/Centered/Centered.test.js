import { shallow } from 'enzyme';
import React from 'react';
import Centered from './Centered';

it('matches snapshot', () => {
	expect(shallow(<Centered />)).toMatchSnapshot();
});
