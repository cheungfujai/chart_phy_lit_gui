import React, { Component } from 'react';
import Welcome from './Component/Welcome';
import Starter from './Component/Starter';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Welcome} />
				<Route path="/Starter" component={Starter} />
			</Switch>
		</Router>
	);
}
