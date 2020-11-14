import React, { Component } from 'react';
import Welcome from './Component/Welcome';
import Starter from './Component/Starter';

import Page2 from './Component/Page2';
import Page3 from './Component/Page3';
import Page4 from './Component/Page4';
import Page5 from './Component/Page5';
import Page6 from './Component/Page6';
import Page7 from './Component/Page7';
import Page8 from './Component/Page8';
import Page9 from './Component/Page9';
import Page10 from './Component/Page10';
import Result from './Component/Result';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Welcome} />
				<Route path="/Starter" component={Starter} />
				<Route path="/Page2" component={Page2} />
				<Route path="/Page3" component={Page3} />
				<Route path="/Page4" component={Page4} />
				<Route path="/Page5" component={Page5} />
				<Route path="/Page6" component={Page6} />
				<Route path="/Page7" component={Page7} />
				<Route path="/Page8" component={Page8} />
				<Route path="/Page9" component={Page9} />
				<Route path="/Page10" component={Page10} />
				<Route path="/Result" component={Result} />
			</Switch>
		</Router>
	);
}
