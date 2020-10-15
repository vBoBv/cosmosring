import React from 'react';
import Home from './Home/Home';
import Authentication from './Authentication/Authentication';
import NavigationBar from './NavigationBar/NavigationBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import history from './history';

import { Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const customTheme = createMuiTheme({
	overrides: {
		MuiFormLabel: { root: { color: 'white', fontSize: '1.2rem' } },
		MuiFormControlLabel: {
			root: {
				color: 'white'
			}
		},
		MuiInput: {
			input: {
				'&::placeholder': {
					color: 'gray'
				},
				color: 'white'
			},
			underline: {
				'&:before': {
					borderBottom: '1px solid white'
				},
				'&:hover:not($disabled):before': {
					borderBottom: '1px solid grey'
				}
			}
		}
	},

	palette: {
		action: {
			disabledBackground: 'white',
			disabled: 'white'
		}
	}
});

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
