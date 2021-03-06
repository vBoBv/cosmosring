import React, { useState } from 'react';
import { Grid, Typography, Button, FormControlLabel, Switch, useTheme, useMediaQuery } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useStyles } from './AuthenticationCSS';
import {
	ILoginForm,
	ICustomerForm,
	IOrderManagerForm,
	loginUser,
	signUpCustomer,
	signUpOrderManager
} from '../../actions';

import backgroundVideo from '../../assets/earthVideo.mp4';
import SignUpForm from './SignUp/SignUpForm';
import SignInForm from './SignIn/SignInForm';

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
	const theme = useTheme();
	const [isSignInView, setIsSignInView] = useState<boolean>(false);
	const [isCustomer, setIsCustomer] = useState<boolean>(true);
	const isScreenMedium = useMediaQuery(theme.breakpoints.down('md'));

	const dispatch = useDispatch();

	const handleSignInView = () => {
		setIsSignInView(!isSignInView);
	};

	const handleSignUpView = () => {
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
							{isSignInView ? 'Create Account' : 'Welcome Back!'}
						</Typography>
					</Grid>
					<Grid item>
						<Typography className={formItem1_subtitle}>
							Acquiring space objects has never been this easy before, Glad to have you back!
						</Typography>
					</Grid>
					<Grid item>
						<Button variant='contained' color='secondary' onClick={handleSignInView}>
							{isSignInView ? 'Sign Up' : 'Sign In'}
						</Button>
					</Grid>
				</Grid>
			</>
		);
	};

	const onSignIn = async (formValues: ILoginForm) => {
		dispatch(loginUser(formValues));
		// fetch('http://localhost:8000/api/user/token/', {
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify(formValues)
		// })
		// 	.then((response) => response.json())
		// 	.then((response) => {
		// 		window.localStorage.setItem('authToken', response.token);
		// 		fetch('http://localhost:8000/api/user/profile/', {
		// 			method: 'GET',
		// 			headers: {
		// 				'Content-Type': 'application/json',
		// 				Authorization: `Token ${window.localStorage.getItem('authToken')}`
		// 			}
		// 		})
		// 			.then((response) => response.json())
		// 			.then((response) => {
		// 				console.log(response);
		//
		// 			});
		// 	})
		// 	.catch((error) => console.error(error));
	};

	const onSignUpCustomer = async (formValues: ICustomerForm) => {
		dispatch(signUpCustomer(formValues));
	};

	const onSignUpOrderManager = async (formValues: IOrderManagerForm) => {
		dispatch(signUpOrderManager(formValues));
	};

	const renderCustomerSignUpContainer = () => {
		return (
			<Grid container item className={formItem2} justify='center' alignItems='center' direction='column'>
				<Grid item>
					<Typography variant='h4' className={formItem1_heading} color='secondary'>
						{isSignInView
							? 'Welcome Back!'
							: !isSignInView && isCustomer
							? 'Create Customer Account'
							: 'Create Admin Account'}
					</Typography>
				</Grid>
				{isSignInView ? (
					<SignInForm onSignIn={onSignIn} />
				) : (
					<SignUpForm isCustomer={isCustomer} onSignUp={isCustomer ? onSignUpCustomer : onSignUpOrderManager} />
				)}
			</Grid>
		);
	};

	const renderAuthenticationForSmallScreen = () => {
		return (
			<Grid container justify='center' style={{ minHeight: '100vh', backgroundColor: 'black', color: 'white' }}>
				<Grid item md={12} sm={12} xs={12} style={{ textAlign: 'center' }}>
					<h1>Sign In</h1>
				</Grid>
				<SignInForm onSignIn={onSignIn} />
				<Grid item md={12} sm={12} xs={12}>
					<hr style={{ width: '50%' }} />
				</Grid>

				<Grid item md={12} sm={12} xs={12} style={{ textAlign: 'center' }}>
					<h1>Sign Up</h1>
				</Grid>
				<SignUpForm isCustomer={isCustomer} onSignUp={isCustomer ? onSignUpCustomer : onSignUpOrderManager} />

				{/* <Grid item>
					<SignInForm onSignIn={onSignIn} />
				</Grid> */}
			</Grid>
		);
	};

	return (
		<>
			{isScreenMedium ? (
				renderAuthenticationForSmallScreen()
			) : (
				<Grid container className={authenticationContainer} justify='center' alignContent='center'>
					<Grid container item className={formContainer} justify='center' alignContent='center' direction='column'>
						{renderCustomerSignInContainer()}
						{renderCustomerSignUpContainer()}
						{isSignInView ? null : (
							<Grid item className={switchContainer}>
								<FormControlLabel
									control={
										<Switch
											checked={isCustomer}
											onChange={handleSignUpView}
											name='authenticationSwitch'
											color='primary'
										/>
									}
									label='Customer'
								/>
							</Grid>
						)}
					</Grid>
				</Grid>
			)}
		</>
	);
};

export default Authentication;
