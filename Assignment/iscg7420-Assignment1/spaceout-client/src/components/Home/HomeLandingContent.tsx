import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';
import { useStyles } from './HomeCSS';
import Typed from 'react-typed';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const HomeLandingContent = () => {
	const { headingContainer, pageHeading, pageSubHeading1, getStartedButton, link } = useStyles();

	return (
		<Grid item container className={headingContainer} direction='column' alignItems='center' justify='center'>
			<Grid item>
				<div className={`${pageHeading} wow fadeIn`}>All in one dimension</div>
			</Grid>
			<Grid item className={pageSubHeading1}>
				--
				<Typed strings={['Browse - Buy - Auction--']} typeSpeed={60} startDelay={3500} showCursor={false} />
			</Grid>
			<Grid item>
				<Link to='/authentication' className={link}>
					<Button
						variant='contained'
						color='secondary'
						className={`${getStartedButton} wow fadeIn`}
						endIcon={<ChevronRightIcon />}>
						Sign In
					</Button>
				</Link>
			</Grid>
		</Grid>
	);
};

export default HomeLandingContent;
