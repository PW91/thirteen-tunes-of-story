import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './js/reactComponents/pages/HomePage';
import AlbumPage from './js/reactComponents/pages/AlbumPage';
import StatsPage from './js/reactComponents/pages/StatsPage';
import AboutPage from './js/reactComponents/pages/AboutPage';
import ContactPage from './js/reactComponents/pages/ContactPage';
import Layout from './js/reactComponents/Layout';
import registerServiceWorker from './registerServiceWorker';
import './App.css';



const root = document.getElementById('root');

ReactDOM.render(
	
	<Router>
		<Layout>
			<Switch>
				<Route exact={true} path='/' component={ HomePage }/>
				<Route path='/album' component={ AlbumPage }/>
				<Route path='/stats' component={ StatsPage }/>
				<Route path='/about' component={ AboutPage }/>
				<Route path='/contact' component={ ContactPage }/>
			</Switch>
		</Layout>
	</Router>,
root);

registerServiceWorker();
