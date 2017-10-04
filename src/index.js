import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './js/reactComponents/pages/HomePage';
import Layout from './js/reactComponents/Layout';
import registerServiceWorker from './registerServiceWorker';
import './App.css';



const root = document.getElementById('root');

ReactDOM.render(
	<Layout>
	<Router>
		<Switch>
			<Route exact={true} path='/' component={HomePage}/>
		</Switch>
	</Router>
	</Layout>,
root);

registerServiceWorker();
