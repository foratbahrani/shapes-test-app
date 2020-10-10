import { shallow } from 'enzyme';
import React from 'react';
import { ReduxSaga } from './ReduxSaga';

it('matches snapshot', () => {
	expect(shallow(<ReduxSaga fetchShapes={() => {}} />)).toMatchSnapshot();
});

it('calls fetchShapes', () => {
	const fetchShapes = jest.fn().mockReturnValue('');
	shallow(<ReduxSaga fetchShapes={fetchShapes} />);
	expect(fetchShapes.mock.calls.length).toBe(1);
});
