import React from 'react';
import { Grid } from '@material-ui/core';

import astronaut from '../../assets/astronaut.png';

const AboutUs = () => {
	return (
		<Grid
			container
			justify='center'
			direction='row'
			style={{ backgroundColor: 'black', color: 'white', paddingTop: '5rem' }}>
			<Grid item>
				<h1>This page is still under construction! Please come back later!</h1>
			</Grid>
			<Grid>
				<img src={astronaut} alt='astronaut' />
			</Grid>
		</Grid>
	);
};

export default AboutUs;
