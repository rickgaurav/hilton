import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
 
import Page from './common/components/Page'; 
import Navbar from "./common/components/NavBar";
import MainBar from './common/components/MainBar';
import TopBar from './common/components/TopBar';
import Store from './Store';

const Root = () => {
	return (
		<Provider store={Store}>
			<Router>
				<div>
					<TopBar/>
					<Navbar/>
					<MainBar/>
				</div>
			</Router>
		</Provider>
	);	
}

export default Root;


