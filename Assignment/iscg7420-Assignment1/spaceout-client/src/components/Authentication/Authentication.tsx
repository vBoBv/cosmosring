import React from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from './AuthenticationCSS';
import backgroundVideo from '../../assets/earthVideo.mp4';

const Authentication = () => {
	const { authenticationContainer, backgroundContainer, videoContainer } = useStyles();

	return (
		<Grid container className={authenticationContainer}>
			<Grid item className={backgroundContainer}>
				<video className={videoContainer} autoPlay loop muted>
					<source src={backgroundVideo} type='video/mp4' />
					Sorry your browser does not support background video.
				</video>
			</Grid>
		</Grid>
	);
};

export default Authentication;
