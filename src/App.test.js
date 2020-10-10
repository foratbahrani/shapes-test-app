import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

it('matches snapshot', () => {
	expect(shallow(<App />)).toMatchSnapshot();
});
