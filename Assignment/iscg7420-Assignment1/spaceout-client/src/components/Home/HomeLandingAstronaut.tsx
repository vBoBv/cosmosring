import React from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from './HomeCSS';

import astronaut from '../../assets/astronaut.png';

const HomeLandingAstronaut = () => {
	const { headingContainer } = useStyles();

	return (
		<Grid item container className={headingContainer} direction='row' alignItems='center' justify='space-around'>
			<Grid item>Text</Grid>
			<Grid item>
				<img src={astronaut} width='500px' />
			</Grid>
		</Grid>
	);
};

export default HomeLandingAstronaut;
