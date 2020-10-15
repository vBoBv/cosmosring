import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { renderTextField } from '../../FormInputs/FormInputs';
import { useStyles } from '../AuthenticationCSS';
import { getSignInAccountDetailFields } from './SignInStaticContent';

import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';

const SignInForm = () => {
	const { instructions, fieldContainer, fieldItem } = useStyles();

	const signInAccountDetailFields = getSignInAccountDetailFields();

	const renderInputIcon = (name: string) => {
		switch (name) {
			case 'email':
				return <EmailIcon />;
			case 'password':
				return <LockIcon />;
			default:
				return <EmailIcon />;
		}
	};

	const renderSignInFields = signInAccountDetailFields.map(({ name, label }) => {
		return (
			<Grid item key={name} className={fieldItem}>
				<Field name={name} component={renderTextField} label={label} icon={renderInputIcon(name)} />
			</Grid>
		);
	});

	const renderSignInForm = () => {
		return (
			<div>
				<Typography className={instructions} variant='body2'>
					Fill in your details!
				</Typography>
				{renderSignInFields}
				<Grid item>
					<Button variant='contained' color='secondary'>
						Sign In
					</Button>
				</Grid>
			</div>
		);
	};

	return (
		<Grid item className={fieldContainer}>
			{renderSignInForm()}
		</Grid>
	);
};

export default reduxForm({
	form: 'signInForm',
	destroyOnUnmount: false
})(SignInForm);
