import { shallow } from 'enzyme';
import React from 'react';
import { HeaderRefreshButton } from './HeaderRefreshButton';

let wrapper;
let refreshShapes = undefined;

beforeEach(() => {
	refreshShapes = jest.fn().mockReturnValue('');
	wrapper = shallow(<HeaderRefreshButton refreshShapes={refreshShapes} />);
});

it('matches snapshot', () => {
	expect(wrapper).toMatchSnapshot();
});

it('calls refresh function', () => {
	expect.assertions(2);
	wrapper.find('[id="button"]').simulate('click');
	expect(refreshShapes.mock.calls.length).toBe(1);
	wrapper.find('[id="button"]').simulate('click');
	expect(refreshShapes.mock.calls.length).toBe(2);
});
