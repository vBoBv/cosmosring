import React, { useState } from 'react';
import { Grid, Typography, Button, FormControlLabel, Switch } from '@material-ui/core';
import { useStyles } from './AuthenticationCSS';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { ILoginForm, loginUser } from '../../actions';
import { StoreState } from '../../reducers';

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

	const [isSignInView, setIsSignInView] = useState<boolean>(false);
	const [isCustomer, setIsCustomer] = useState<boolean>(true);

	const dispatch = useDispatch();
	const users: ILoginForm = useSelector(({ users }: StoreState) => users, shallowEqual);

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
							Contrary to popular belief, Lorem Ipsum is not simply random text.
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
		// dispatch(loginUser(formValues));
		fetch('http://localhost:8000/api/user/token/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formValues)
		})
			.then((response) => response.json())
			.then((response) => {
				window.localStorage.setItem('auth-token', response.token);
			})
			.catch((error) => console.error(error));
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
				{isSignInView ? <SignInForm onSignIn={onSignIn} /> : <SignUpForm isCustomer={isCustomer} />}
			</Grid>
		);
	};

	return (
		<Grid container className={authenticationContainer} justify='center' alignContent='center'>
			<Grid container item className={formContainer} justify='center' alignContent='center' direction='column'>
				{renderCustomerSignInContainer()}
				{renderCustomerSignUpContainer()}
				{isSignInView ? null : (
					<Grid item className={switchContainer}>
						<FormControlLabel
							control={
								<Switch checked={isCustomer} onChange={handleSignUpView} name='authenticationSwitch' color='primary' />
							}
							label='Customer'
						/>
					</Grid>
				)}
			</Grid>
		</Grid>
	);
};

export default Authentication;
