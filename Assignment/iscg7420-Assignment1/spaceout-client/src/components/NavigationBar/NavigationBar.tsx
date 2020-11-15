import React, { useEffect } from 'react';
import { useStyles } from './NavigationBarCSS';
import { Grid } from '@material-ui/core';
import Typed from 'react-typed';
import WOW from 'wowjs';
import ShoppingDrawer from '../ShoppingDrawer/ShoppingDrawer';

import logoImg from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
	useEffect(() => {
		new WOW.WOW({
			live: false
		}).init();
	}, []);

	const { navigationBarContainer, logoContainer, logo, logoText } = useStyles();

	return (
		<Grid container className={navigationBarContainer} direction='row' justify='space-between' alignItems='center'>
			<Grid item className={logoContainer}>
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
			<Grid item>
				<ShoppingDrawer />
			</Grid>
		</Grid>
	);
};

export default NavigationBar;
