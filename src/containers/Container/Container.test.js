import { shallow } from 'enzyme';
import React from 'react';
import Container from './Container';

it('matches snapshot', () => {
	expect(shallow(<Container />)).toMatchSnapshot();
});
