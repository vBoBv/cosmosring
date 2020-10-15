import React, { useState } from 'react';
import { Grid, Typography, Button, FormControlLabel, Switch } from '@material-ui/core';
import { useStyles } from './AuthenticationCSS';
import backgroundVideo from '../../assets/earthVideo.mp4';
import SignUpForm from './SignUp/SignUpForm';

const Authentication = () => {
	const {
		authenticationContainer,
		backgroundContainer,
		videoContainer,
		formContainer,
		formItem1,
		formItem2,
		formItem1_heading,
		formItem1_subtitle,
		switchContainer
	} = useStyles();
	const [isCustomer, setIsCustomer] = useState<boolean>(true);

	const handleChange = (isCustomer: boolean) => {
		setIsCustomer(!isCustomer);
	};

	const renderCustomerSignInContainer = () => {
		return (
			<>
				<Grid container item className={backgroundContainer}>
					<video className={videoContainer} autoPlay loop muted>
						<source src={backgroundVideo} type='video/mp4' />
						Sorry your browser does not support background video.
					</video>
				</Grid>
				<Grid container item className={formItem1} justify='center' alignItems='center' direction='column'>
					<Grid item>
						<Typography variant='h4' className={formItem1_heading}>
							Welcome Back!
						</Typography>
					</Grid>
					<Grid item>
						<Typography className={formItem1_subtitle}>
							Contrary to popular belief, Lorem Ipsum is not simply random text.
						</Typography>
					</Grid>
					<Grid item>
						<Button variant='contained' color='secondary'>
							Sign In
						</Button>
					</Grid>
				</Grid>
			</>
		);
	};

	const renderCustomerSignUpContainer = () => {
		return (
			<Grid container item className={formItem2} justify='center' alignItems='center' direction='column'>
				<Grid item>
					<Typography variant='h4' className={formItem1_heading} color='secondary'>
						Create Account
					</Typography>
				</Grid>

				<SignUpForm isCustomer={isCustomer} />
			</Grid>
		);
	};

	return (
		<Grid container className={authenticationContainer} justify='center' alignContent='center'>
			<Grid container item className={formContainer} justify='center' alignContent='center' direction='column'>
				{renderCustomerSignInContainer()}
				{renderCustomerSignUpContainer()}
				<Grid item className={switchContainer}>
					<FormControlLabel
						control={
							<Switch
								checked={isCustomer}
								onChange={() => handleChange(isCustomer)}
								name='authenticationSwitch'
								color='primary'
							/>
						}
						label='Customer'
					/>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Authentication;
