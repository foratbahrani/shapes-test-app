import { shallow } from 'enzyme';
import React from 'react';
import { initialState } from '../../store/shapes/shapes.reducers';
import { GridTitleLabel } from './GridTitleLabel';

let wrapper;

it('works when no items are selected', () => {
	expect.assertions(3);

	// 0 shapes, 0 colors
	let filteredShapes = [];
	let filteredColors = [];
	wrapper = shallow(
		<GridTitleLabel filteredColors={filteredColors} filteredShapes={filteredShapes} />
	);
	expect(wrapper.find('[id="GridTitleLabel"]').text()).toEqual('No items.');

	// 1 shape, 0 colors
	filteredShapes = ['rectangle'];
	filteredColors = [];
	wrapper = shallow(
		<GridTitleLabel filteredColors={filteredColors} filteredShapes={filteredShapes} />
	);
	expect(wrapper.find('[id="GridTitleLabel"]').text()).toEqual('No items.');

	// 0 shapes, 1 color
	filteredShapes = ['rectangle'];
	filteredColors = [];
	wrapper = shallow(
		<GridTitleLabel filteredColors={filteredColors} filteredShapes={filteredShapes} />
	);
	expect(wrapper.find('[id="GridTitleLabel"]').text()).toEqual('No items.');
});

it('works when single item is selected', () => {
	expect.assertions(1);

	const filteredShapes = ['round'];
	const filteredColors = ['red'];
	wrapper = shallow(
		<GridTitleLabel filteredColors={filteredColors} filteredShapes={filteredShapes} />
	);

	expect(wrapper.find('[id="GridTitleLabel"]').text()).toEqual('round red items:');
});

it('works when all items are selected', () => {
	expect.assertions(1);

	const filteredShapes = initialState.filters.shapes;
	const filteredColors = initialState.filters.colors;
	wrapper = shallow(
		<GridTitleLabel filteredColors={filteredColors} filteredShapes={filteredShapes} />
	);

	expect(wrapper.find('[id="GridTitleLabel"]').text()).toEqual('All items:');
});

it('works when all colors / single shape are selected', () => {
	expect.assertions(1);

	const filteredShapes = ['rectangle'];
	const filteredColors = initialState.filters.colors;
	wrapper = shallow(
		<GridTitleLabel filteredColors={filteredColors} filteredShapes={filteredShapes} />
	);

	expect(wrapper.find('[id="GridTitleLabel"]').text()).toEqual('All rectangle items:');
});

it('works when all shapes / single color are selected', () => {
	expect.assertions(1);

	const filteredShapes = initialState.filters.shapes;
	const filteredColors = ['red'];
	wrapper = shallow(
		<GridTitleLabel filteredColors={filteredColors} filteredShapes={filteredShapes} />
	);

	expect(wrapper.find('[id="GridTitleLabel"]').text()).toEqual('All red items:');
});

it('works when one shape / multiple colors are selected', () => {
	expect.assertions(1);

	const filteredShapes = ['square'];
	const filteredColors = initialState.filters.colors.pop();
	wrapper = shallow(
		<GridTitleLabel filteredColors={filteredColors} filteredShapes={filteredShapes} />
	);

	expect(wrapper.find('[id="GridTitleLabel"]').text()).toEqual('Multiple square items:');
});

it('works when multiple shapes / one color are selected', () => {
	expect.assertions(1);

	const filteredShapes = initialState.filters.shapes.pop();
	const filteredColors = ['red'];
	wrapper = shallow(
		<GridTitleLabel filteredColors={filteredColors} filteredShapes={filteredShapes} />
	);

	expect(wrapper.find('[id="GridTitleLabel"]').text()).toEqual('Multiple red items:');
});

it('works when multiple shapes / multiple colors are selected', () => {
	expect.assertions(1);

	const filteredShapes = ['a', 'b'];
	const filteredColors = ['a', 'b'];
	wrapper = shallow(
		<GridTitleLabel filteredColors={filteredColors} filteredShapes={filteredShapes} />
	);

	expect(wrapper.find('[id="GridTitleLabel"]').text()).toEqual('Multiple items:');
});
