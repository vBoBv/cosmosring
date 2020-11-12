import React from 'react';
import Home from './Home/Home';
import Authentication from './Authentication/Authentication';
import NavigationBar from './NavigationBar/NavigationBar';
import Categories from './Category/Categories';
import CategoryShow from './Category/CategoryShow';
import CategoryCreate from './Category/CategoryCreate';
import CategoryEdit from './Category/CategoryEdit';
import Discount from './Discount/Discounts';
import DiscountShow from './Discount/DiscountShow';

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
					<Route exact path='/categories' component={Categories} />
					<Route exact path='/categories/new' component={CategoryCreate} />
					<Route exact path='/categories/edit/:id' component={CategoryEdit} />
					<Route exact path='/categories/:id' component={CategoryShow} />
					<Route exact path='/discounts' component={Discount} />
					<Route exact path='/discounts/:id' component={DiscountShow} />
				</Switch>
			</Router>
		</ThemeProvider>
	);
};

export default App;
