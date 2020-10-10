import { shallow } from 'enzyme';
import React from 'react';
import { HeaderLink } from './HeaderLink';

it('matches snapshot', () => {
	const history = { location: { pathname: '' } };
	expect(shallow(<HeaderLink to='' history={history} />)).toMatchSnapshot();
});

it('activates when needed', () => {
	const history = { location: { pathname: '/test' } };
	expect(shallow(<HeaderLink to='/test' history={history} />).props().className).toEqual('active');
});

it('deactivates when needed', () => {
	const history = { location: { pathname: '/meh' } };
	expect(shallow(<HeaderLink to='/test' history={history} />).props().className).toEqual('');
});
