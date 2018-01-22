import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import asyncComponent from './AsyncComponent';

// import TrainsApp from '../trains/components/TrainsApp';
// import FlightsApp from '../flights/components/FlightsApp';
// import BusesApp from '../buses/components/BusesApp';

const AsyncTrainsApp = asyncComponent(() => import(/* webpackChunkName: "trains" */ '../../trains/components/TrainsApp'));
const AsyncFlightsApp = asyncComponent(() => import(/* webpackChunkName: "flights" */ '../../flights/components/FlightsApp'));
const AsyncBusesApp = asyncComponent(() => import(/* webpackChunkName: "buses" */ '../../buses/components/BusesApp'));

export default class MainBar extends Component {
	render() {
		return (
			<div>
					<Switch>
						<Route exact path="/" component={AsyncTrainsApp}/>
						<Route path="/all" component={AsyncTrainsApp}/>
						<Route path="/trains" component={AsyncTrainsApp}/>
						<Route path="/flights" component={AsyncFlightsApp}/>
						<Route path="/buses" component={AsyncBusesApp}/>
					</Switch>
				
			</div>	
		);
	}
}

// export default class MainBar extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<Router>
// 					<Switch>
// 						<Route exact path="/" component={TrainsApp}/>
// 						<Route path="/trains" component={TrainsApp}/>
// 						<Route path="/flights" component={FlightsApp}/>
// 						<Route path="/buses" component={BusesApp}/>
// 					</Switch>
// 				</Router>
// 			</div>	
// 		);
// 	}
// }













