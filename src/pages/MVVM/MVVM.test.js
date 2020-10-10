import { shallow } from 'enzyme';
import React from 'react';
import MVVM from './MVVM';

it('matches snapshot', () => {
	expect(shallow(<MVVM />)).toMatchSnapshot();
});
