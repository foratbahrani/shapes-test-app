import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import MVVM from '../pages/MVVM/MVVM';
import { ReduxSaga } from '../pages/ReduxSaga/ReduxSaga';

// Router
const MainRouter = () => (
	<Switch>
		<Route path='/redux-saga' component={ReduxSaga} />
		<Route path='/mvvm' component={MVVM} />
		<Route render={() => <Redirect to='/redux-saga' />} />
	</Switch>
);

// export
export default MainRouter;
