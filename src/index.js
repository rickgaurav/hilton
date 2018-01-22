import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import "babel-polyfill";
import './app.css';

const rootEl = document.getElementById('root');

const render = Component => ReactDOM.render(
		<Component />,
		rootEl
);

render(Root);

// if(module.hot) {
// 	module.hot.accept('./Root', () => render(Root));
// }
