import React, { Component } from 'react';
import { connect } from 'react-redux';
import GridTitleLabel from '../../components/GridTitleLabel/GridTitleLabel';
import ItemsGridBox from '../../components/ItemsGridBox/ItemsGridBox';
import Toolbar from '../../components/Toolbar/Toolbar';
import Container from '../../containers/Container/Container';
import { fetchShapesStart } from '../../store/shapes/shapes.actions';

export class ReduxSaga extends Component {
	componentDidMount() {
		const { fetchShapes } = this.props;
		if (fetchShapes) fetchShapes();
	}

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

const mapDispatchToProps = {
	fetchShapes: fetchShapesStart,
};

export default connect(null, mapDispatchToProps)(ReduxSaga);
