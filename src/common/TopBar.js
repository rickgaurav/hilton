import React, { Component } from 'react';
import paytmLogo from '../images/svgs/paytm_logo.svg';
import styled from 'styled-components';

const TopBar = styled.div`
	padding: 12px 18px;
	border-bottom: 1px solid #ebebeb;
`;

export default class TopBarComp extends Component {
	render() {
		return (
			<TopBar>
				<div>
					<img src={paytmLogo} alt="Paytm Logo"/>
					<div>
						Travel
					</div>
				</div>
			</TopBar>
		);
	}
}
