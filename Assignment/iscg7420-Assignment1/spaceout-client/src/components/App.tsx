import React from 'react';
import Home from './Home/Home';
import Authentication from './Authentication/Authentication';
import NavigationBar from './NavigationBar/NavigationBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import history from './history';

import { Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { customTheme } from './AppCSS';

const App = () => {
	return (
		<ThemeProvider theme={customTheme}>
			<CssBaseline />
			<Router history={history}>
				<NavigationBar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/authentication' component={Authentication} />
				</Switch>
			</Router>
		</ThemeProvider>
	);
};

export default App;
