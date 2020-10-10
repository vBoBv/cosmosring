import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './HomeCSS';
import Typed from 'react-typed';

const HomeLandingContent = () => {
	const { headingContainer, pageHeading, pageSubHeading1 } = useStyles();

	return (
		<Grid item container className={headingContainer} direction='column' alignItems='center' justify='center'>
			<Grid item>
				<Typography className={`${pageHeading} wow fadeIn`}>All in one dimension</Typography>
			</Grid>
			<Grid item className={pageSubHeading1}>
				--
				<Typed strings={['Browse - Buy - Auction--']} typeSpeed={60} startDelay={3500} showCursor={false} />
			</Grid>
		</Grid>
	);
};

export default HomeLandingContent;
