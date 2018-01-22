import React, { Component } from 'react';
import Styled from 'styled-components';

import NavbarItemContainer from '../containers/NavbarItemContainer';

const NavbarStyled = Styled.div`
	padding: 15px 18px 0;
	border-bottom: 1px solid #ebebeb;
	display: flex;
`;

export default class NavBar extends Component {
	render() {
		return (
			<NavbarStyled>
				<NavbarItemContainer text="all"/>
				<NavbarItemContainer text="flights"/>
				<NavbarItemContainer text="bus"/>
				<NavbarItemContainer text="trains"/>
			</NavbarStyled>
		);
	}
}
