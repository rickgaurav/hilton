import React, { Component } from 'react';
import {Provider} from 'react-redux';
 
import Navbar from "./common/NavBar.js";
import MainBar from './common/MainBar.js';
import TopBar from './common/TopBar';
import Store from './Store';

const Root = () => {
	return (
		<Provider store={Store}>
			<div>
				<TopBar/>
				<Navbar/>
				<MainBar/>
			</div>
		</Provider>
	);	
}

export default Root;


