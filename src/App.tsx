import React, { Component } from 'react';
import Welcome from './Component/Welcome';
import Starter from './Component/Starter';

import Page2 from './Component/Page2';
import Page3 from './Component/Page3';
import Page4 from './Component/Page4';
import Page5 from './Component/Page5';
import Result from './Component/Result';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Logo from './Component/Logo';

export const route = ["/","/Starter","/Page2","/Page3","/Page4","/Page5","/Result"];



export default function App() {
	return (
		<Router>
			<Logo />
			<Switch>
				<Route exact path="/" component={Welcome} />
				<Route path="/Starter" component={Starter} />
				<Route path="/Page2" component={Page2} />
				<Route path="/Page3" component={Page3} />
				<Route path="/Page4" component={Page4} />
				<Route path="/Page5" component={Page5} />
				<Route path="/Result" component={Result} />
			</Switch>
		</Router>
	);
}
