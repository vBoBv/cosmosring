import React from 'react';
import Home from './Home/Home';
import Authentication from './Authentication/Authentication';
import NavigationBar from './NavigationBar/NavigationBar';
import AboutUs from './AboutUs/AboutUs';
import Footer from './Footer/Footer';

import Categories from './Category/Categories';
import CategoryShow from './Category/CategoryShow';
import CategoryCreate from './Category/CategoryCreate';
import CategoryEdit from './Category/CategoryEdit';

import Discounts from './Discount/Discounts';
import DiscountShow from './Discount/DiscountShow';
import DiscountCreate from './Discount/DiscountCreate';
import DiscountEdit from './Discount/DiscountEdit';

import Products from './ShoppingDrawer/Product/Products';
import ProductShow from './ShoppingDrawer/Product/ProductShow';
import ProductCreate from './ShoppingDrawer/Product/ProductCreate';
import ProductEdit from './ShoppingDrawer/Product/ProductEdit';

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
					<Route exact path='/aboutus' component={AboutUs} />
					<Route exact path='/authentication' component={Authentication} />

					<Route exact path='/products' component={Products} />
					<Route exact path='/products/new' component={ProductCreate} />
					<Route exact path='/products/edit/:id' component={ProductEdit} />
					<Route exact path='/products/:id' component={ProductShow} />

					<Route exact path='/categories' component={Categories} />
					<Route exact path='/categories/new' component={CategoryCreate} />
					<Route exact path='/categories/edit/:id' component={CategoryEdit} />
					<Route exact path='/categories/:id' component={CategoryShow} />

					<Route exact path='/discounts' component={Discounts} />
					<Route exact path='/discounts/new' component={DiscountCreate} />
					<Route exact path='/discounts/edit/:id' component={DiscountEdit} />
					<Route exact path='/discounts/:id' component={DiscountShow} />
				</Switch>
				<Footer />
			</Router>
		</ThemeProvider>
	);
};

export default App;
