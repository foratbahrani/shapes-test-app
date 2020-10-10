// app.test.js
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';
import MainRouter from './MainRouter';
import { Provider } from 'react-redux';
import { store } from '../store/store';

it('test home page loads redux saga', () => {
	const history = createMemoryHistory();
	render(
		<Provider store={store}>
			<Router history={history}>
				<MainRouter />
			</Router>
		</Provider>
	);
	expect(screen.getByText(/All items:/i)).toBeInTheDocument();
});

it('test loads mvvm page', () => {
	const history = createMemoryHistory();
	history.push('/mvvm');
	render(
		<Provider store={store}>
			<Router history={history}>
				<MainRouter />
			</Router>
		</Provider>
	);

	expect(screen.getByText(/to be done/i)).toBeInTheDocument();
});

it('test redirects to Redux Saga', () => {
	const history = createMemoryHistory();
	history.push('/random');
	render(
		<Provider store={store}>
			<Router history={history}>
				<MainRouter />
			</Router>
		</Provider>
	);

	expect(screen.getByText(/All items:/i)).toBeInTheDocument();
});
