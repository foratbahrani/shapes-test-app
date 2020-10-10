import { shallow } from 'enzyme';
import React from 'react';
import { ColorsMenuButton } from './ColorsMenuButton';

let wrapper;
let toggleFilteredColor = undefined;

beforeEach(() => {
	const color = 'red';
	const filteredColors = ['red'];
	toggleFilteredColor = jest.fn().mockReturnValue('');
	wrapper = shallow(
		<ColorsMenuButton
			color={color}
			filteredColors={filteredColors}
			toggleFilteredColor={toggleFilteredColor}
		/>
	);
});

it('matches snapshot', () => {
	expect(wrapper).toMatchSnapshot();
});

it('calls toggle function', () => {
	expect.assertions(2);
	wrapper.find('[id="button"]').simulate('click');
	expect(toggleFilteredColor.mock.calls.length).toBe(1);
	wrapper.find('[id="button"]').simulate('click');
	expect(toggleFilteredColor.mock.calls.length).toBe(2);
});
