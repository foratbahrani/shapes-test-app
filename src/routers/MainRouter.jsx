import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import Centered from '../containers/Centered/Centered';

// * lazy import
// improves performance with slow connections
const ReduxSaga = lazy(() => import('../pages/ReduxSaga/ReduxSaga'));
const MVVM = lazy(() => import('../pages/MVVM/MVVM'));

const MainRouter = () => (
	<Suspense fallback={fallback()}>
		<Switch>
			<Route path='/redux-saga' component={ReduxSaga} />
			<Route path='/mvvm' component={MVVM} />
			<Route path='*' render={() => <Redirect to='/redux-saga' />} />
		</Switch>
	</Suspense>
);

const fallback = () => (
	<Centered>
		<Spinner />
	</Centered>
);

export default MainRouter;
