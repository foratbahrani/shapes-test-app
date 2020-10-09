import React from 'react';
import Container from '../../containers/Container/Container';
import './Header.scss';
import HeaderLink from './HeaderLink';
import HeaderRefreshButton from './HeaderRefreshButton';

const Header = () => {
	return (
		<div className='header'>
			<Container size='lg'>
				<div className='headerFlexBox'>
					<ul className='navbar'>
						<li>
							<h1>SHAPES</h1>
						</li>
						<li>
							<HeaderLink to='/redux-saga'>ReduxSaga</HeaderLink>
						</li>
						<li>
							<HeaderLink to='/mvvm'>MVVM</HeaderLink>
						</li>
					</ul>

					<HeaderRefreshButton />
				</div>
			</Container>
		</div>
	);
};

export default Header;
