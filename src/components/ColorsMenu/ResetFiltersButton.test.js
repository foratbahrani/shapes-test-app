import { shallow } from 'enzyme';
import React from 'react';
import { ResetFiltersButton } from './ResetFiltersButton';

let wrapper;
let resetFilters = undefined;

beforeEach(() => {
	const color = 'red';
	const filteredColors = ['red'];
	resetFilters = jest.fn().mockReturnValue('');
	wrapper = shallow(
		<ResetFiltersButton
			color={color}
			filteredColors={filteredColors}
			resetFilters={resetFilters}
		/>
	);
});

it('matches snapshot', () => {
	expect(wrapper).toMatchSnapshot();
});

it('calls reset function', () => {
	expect.assertions(2);
	wrapper.find('[id="button"]').simulate('click');
	expect(resetFilters.mock.calls.length).toBe(1);
	wrapper.find('[id="button"]').simulate('click');
	expect(resetFilters.mock.calls.length).toBe(2);
});
