import React, { Component } from 'react';
import GridTitleLabel from '../../components/GridTitleLabel/GridTitleLabel';
import ItemsGridBox from '../../components/ItemsGridBox/ItemsGridBox';
import Toolbar from '../../components/Toolbar/Toolbar';
import Container from '../../containers/Container/Container';

export default class ReduxSaga extends Component {
	render() {
		return (
			<Container size='lg'>
				<Toolbar />
				<GridTitleLabel />
				<ItemsGridBox />
			</Container>
		);
	}
}
