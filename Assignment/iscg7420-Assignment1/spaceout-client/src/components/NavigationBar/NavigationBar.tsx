import React, { useEffect } from 'react';
import { useStyles } from './NavigationBarCSS';
import { Button, Grid, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Typed from 'react-typed';
import WOW from 'wowjs';
import ShoppingDrawer from '../ShoppingDrawer/ShoppingDrawer';

import logoImg from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
	const theme = useTheme();

	useEffect(() => {
		new WOW.WOW({
			live: false
		}).init();
	}, []);

	const { navigationBarContainer, logoContainer, logo, logoText } = useStyles();
	const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Grid container className={navigationBarContainer} direction='row' alignItems='center'>
			<Grid item className={logoContainer} lg={3} md={3} sm={6} xs={6}>
				<Grid item>
					<Link to='/'>
						<img
							className={`${logo} wow rollIn rotatingAnimation`}
							src={logoImg}
							alt='Logo'
							data-wow-duration='2s'
							data-wow-delay='1.5s'
						/>
					</Link>
				</Grid>
				<Grid item className={logoText}>
					<Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
						<Typed strings={['Above']} typeSpeed={150} backSpeed={100} backDelay={10} smartBackspace />
					</Link>
				</Grid>
			</Grid>
			{isScreenSmall ? null : (
				<Grid item lg={6} md={6}>
					<Grid container direction='row' justify='center' spacing={3}>
						<Grid item>
							<Link to='/products' style={{ textDecoration: 'none', color: 'white' }}>
								<Button color='inherit'>Products</Button>
							</Link>
						</Grid>

						<Grid item>
							<Link to='/categories' style={{ textDecoration: 'none', color: 'white' }}>
								<Button color='inherit'>Categories</Button>
							</Link>
						</Grid>

						<Grid item>
							<Link to='/discounts' style={{ textDecoration: 'none', color: 'white' }}>
								<Button color='inherit'>Discounts</Button>
							</Link>
						</Grid>
					</Grid>
				</Grid>
			)}
			<Grid item lg={3} md={3} sm={6} xs={6}>
				<ShoppingDrawer />
			</Grid>
		</Grid>
	);
};

export default NavigationBar;
