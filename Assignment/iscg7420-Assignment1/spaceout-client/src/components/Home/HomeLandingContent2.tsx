import React from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from './HomeCSS';

const HomeLandingContent2 = () => {
	const { headingContainer } = useStyles();

	return (
		<Grid item container className={headingContainer} direction='column' alignItems='center' justify='center'>
			Content 2
		</Grid>
	);
};

export default HomeLandingContent2;
