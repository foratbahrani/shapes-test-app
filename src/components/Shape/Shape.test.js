import { shallow } from 'enzyme';
import React from 'react';
import Shape from './Shape';

const shapes = ['round', 'square', 'triangle', 'oval', 'rectangle'];

for (const shape of shapes) {
	it(`works for ${shape}`, () => {
		const wrapper = shallow(<Shape shape={shape} color='red' size='sm' />);
		expect(wrapper.type()).not.toBeNull();
	});
}

it(`returns null for others shape`, () => {
	const wrapper = shallow(<Shape shape='meh' color='red' size='sm' />);
	expect(wrapper.type()).toBeNull();
});

const colors = ['purple', 'red', 'green', 'blue', 'yellow', 'black', 'other'];
const colorHashes = ['#76147b', '#ea3323', '#62c654', '#5197f7', '#edcb59', '#000000', '#e0e0e0'];

for (let i = 0; i < colors.length; i++) {
	it(`works for ${colors[i]}`, () => {
		const wrapper = shallow(<Shape shape='rectangle' color={colors[i]} size='sm' />);
		expect(wrapper.props().fill.color.toLowerCase()).toEqual(colorHashes[i]);
	});
}

it('works for small size', () => {
	const wrapper = shallow(<Shape shape='rectangle' color='red' size='sm' />);
	expect(wrapper.props().width).toEqual(30);
});

it('works for large size', () => {
	const wrapper = shallow(<Shape shape='rectangle' color='red' size='lg' />);
	expect(wrapper.props().width).toEqual(200);
});

it('works for active State', () => {
	const wrapper = shallow(<Shape shape='rectangle' color='red' size='lg' isActive />);
	expect(wrapper.props().strokeWidth).toEqual(2);
});

it('works for inactive State', () => {
	const wrapper = shallow(<Shape shape='rectangle' color='red' size='lg' isActive={false} />);
	expect(wrapper.props().strokeWidth).toEqual(0);
});
