import { shallow } from 'enzyme';
import React from 'react';
import { ShapesMenuButton } from './ShapesMenuButton';

let wrapper;
let toggleFilteredShape = undefined;

beforeEach(() => {
	const shape = 'rectangle';
	const filteredShapes = ['rectangle'];
	toggleFilteredShape = jest.fn().mockReturnValue('');
	wrapper = shallow(
		<ShapesMenuButton
			color={shape}
			filteredShapes={filteredShapes}
			toggleFilteredShape={toggleFilteredShape}
		/>
	);
});

it('matches snapshot', () => {
	expect(wrapper).toMatchSnapshot();
});

it('calls toggle function', () => {
	expect.assertions(2);
	wrapper.find('[id="button"]').simulate('click');
	expect(toggleFilteredShape.mock.calls.length).toBe(1);
	wrapper.find('[id="button"]').simulate('click');
	expect(toggleFilteredShape.mock.calls.length).toBe(2);
});

it('activates when needed', () => {
	expect(
		shallow(<ShapesMenuButton filteredShapes={['rectangle']} title='rectangle' />)
			.find("[id='button']")
			.props().className
	).toEqual('shapesMenuButton shapesMenuButton--active shrink');
});

it('deactivates when needed', () => {
	expect(
		shallow(<ShapesMenuButton filteredShapes={['square']} title='rectangle' />)
			.find("[id='button']")
			.props().className
	).toEqual('shapesMenuButton  shrink');
});
