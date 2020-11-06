import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { renderTextField } from '../../FormInputs/FormInputs';
import { useStyles } from '../AuthenticationCSS';
import { getSignInAccountDetailFields } from './SignInStaticContent';
import { ILoginForm } from '../../../actions';

import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';

interface ISignInFormProps {
	onSignIn: (formValues: ILoginForm) => void;
}

const SignInForm: React.FC<InjectedFormProps<{}, ISignInFormProps> & ISignInFormProps> = ({
	handleSubmit,
	onSignIn
}) => {
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

	// TODO: ILoginForm type, SHOULD NOT BE any, gives compile error to handleSubmit, DO MORE REASEARCH ON the type of formValues provided by redux-form
	const onSubmit = (formValues: any) => {
		onSignIn(formValues);
	};

	const renderSignInForm = () => {
		return (
			<form onSubmit={handleSubmit(onSubmit)}>
				<Typography className={instructions} variant='body2'>
					Fill in your details!
				</Typography>
				{renderSignInFields}
				<Grid item>
					<Button variant='contained' color='secondary' type='submit'>
						Sign In
					</Button>
				</Grid>
			</form>
		);
	};

	return (
		<Grid item className={fieldContainer}>
			{renderSignInForm()}
		</Grid>
	);
};

export default reduxForm<{}, ISignInFormProps>({
	form: 'signInForm',
	destroyOnUnmount: false
})(SignInForm);
