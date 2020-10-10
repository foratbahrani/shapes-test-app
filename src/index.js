// essential
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
// styles
import './index.css';
import './styles/styles.scss';
// app
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
