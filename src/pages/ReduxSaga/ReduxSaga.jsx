import React, { Component } from 'react';
import { connect } from 'react-redux';
import GridTitleLabel from '../../components/GridTitleLabel/GridTitleLabel';
import ItemsGridBox from '../../components/ItemsGridBox/ItemsGridBox';
import Toolbar from '../../components/Toolbar/Toolbar';
import Container from '../../containers/Container/Container';
import withSpinner from '../../containers/withSpinner/withSpinner';
import { fetchShapesStart } from '../../store/shapes/shapes.actions';

class ReduxSaga extends Component {
	componentDidMount() {
		this.props.fetchShapes();
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

const mapDispatchToProps = dispatch => ({
	fetchShapes: () => dispatch(fetchShapesStart()),
});

export default connect(null, mapDispatchToProps)(ReduxSaga);
