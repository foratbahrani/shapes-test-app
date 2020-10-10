import { shallow } from 'enzyme';
import React from 'react';
import Spinner from './Spinner';

it('matches snapshot', () => {
	expect(shallow(<Spinner />)).toMatchSnapshot();
});
