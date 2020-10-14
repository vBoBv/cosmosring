import React from 'react';
import Home from './Home/Home';
import Authentication from './Authentication/Authentication';
import CssBaseline from '@material-ui/core/CssBaseline';
import history from './history';

import { Router, Switch, Route } from 'react-router-dom';

const App = () => {
	return (
		<div>
			<CssBaseline />
			<Router history={history}>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/authentication' component={Authentication} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
