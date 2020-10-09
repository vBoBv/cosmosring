import React from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from './HomeCSS';
import StarParticles from '../StarParticles/StarParticles';
import NavigationBar from '../NavigationBar/NavigationBar';

const Home = () => {
	const { containerBackground } = useStyles();

	return (
		<Grid container className={containerBackground} direction='column'>
			<StarParticles />
			<NavigationBar />
		</Grid>
	);
};

export default Home;
