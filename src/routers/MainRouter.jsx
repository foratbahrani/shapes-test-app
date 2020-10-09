import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import Centered from '../containers/Centered/Centered';

// * lazy import pages
const ReduxSaga = lazy(() => import('../pages/ReduxSaga/ReduxSaga'));
const MVVM = lazy(() => import('../pages/MVVM/MVVM'));

// Router
const MainRouter = () => (
	<Suspense fallback={fallback()}>
		<Switch>
			<Route path='/redux-saga' component={ReduxSaga} />
			<Route path='/mvvm' component={MVVM} />
			<Route path='*' render={() => <Redirect to='/redux-saga' />} />
		</Switch>
	</Suspense>
);

// Show spinner when loading
const fallback = () => (
	<Centered>
		<Spinner />
	</Centered>
);

// export
export default MainRouter;
