import React, { useState } from 'react';
import MenuStepper from '../../MenuStepper/MenuStepper';
import { Grid, Button, Typography } from '@material-ui/core';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { renderTextField, renderSelectField } from '../../FormInputs/FormInputs';
import { useStyles } from '../AuthenticationCSS';
import {
	getCustomerSteps,
	getCustomerStepContent,
	getAccountDetailFields,
	getCustomerPersonalDetailFields,
	getCustomerAddressDetailFields,
	getAdminAccountDetailFields
} from './SignUpStaticContent';

import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';

interface ISignUpFormProps {
	isCustomer: boolean;
	onSignUp: (formValues: any) => void;
}

const SignUpForm: React.FC<InjectedFormProps<{}, ISignUpFormProps> & ISignUpFormProps> = ({
	isCustomer,
	handleSubmit,
	onSignUp
}) => {
	const [activeStep, setActiveStep] = useState<number>(0);
	const { instructions, fieldContainer, fieldItem, buttonGroup } = useStyles();

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	const customerSteps = getCustomerSteps();
	const customerAccountDetailFields = getAccountDetailFields();
	const customerPersonalDetailFields = getCustomerPersonalDetailFields();
	const customerAddressDetailFields = getCustomerAddressDetailFields();
	const adminAccountDetailFields = getAdminAccountDetailFields();

	const renderInputIcon = (name: string) => {
		switch (name) {
			case 'username':
				return <AccountCircle />;
			case 'password1':
			case 'password2':
				return <LockIcon />;
			case 'email':
				return <EmailIcon />;
			case 'firstName':
			case 'lastName':
				return <PersonIcon />;
			case 'phoneNumber':
				return <PhoneIcon />;
			case 'streetAddress':
			case 'suburb':
			case 'city':
			case 'country':
			case 'postCode':
				return <HomeIcon />;
			default:
				return <AccountCircle />;
		}
	};

	const renderCustomerAccountDetailFields = customerAccountDetailFields.map(({ name, label }) => {
		return (
			<Grid item key={name} className={fieldItem}>
				<Field name={name} component={renderTextField} label={label} icon={renderInputIcon(name)} />
			</Grid>
		);
	});

	const renderCustomerPersonalDetailFields = customerPersonalDetailFields.map(({ name, label }) => {
		return (
			<Grid item key={name} className={fieldItem}>
				<Field name={name} component={renderTextField} label={label} icon={renderInputIcon(name)} />
			</Grid>
		);
	});

	const renderCustomerAddressDetailFields = customerAddressDetailFields.map(({ name, label }) => {
		return (
			<Grid item key={name} className={fieldItem}>
				<Field
					name={name}
					component={name === 'city' ? renderSelectField : renderTextField}
					label={label}
					icon={renderInputIcon(name)}
				/>
			</Grid>
		);
	});

	const renderAdminAccountDetailFields = adminAccountDetailFields.map(({ name, label }) => {
		return (
			<Grid item key={name} className={fieldItem}>
				<Field name={name} component={renderTextField} label={label} icon={renderInputIcon(name)} />
			</Grid>
		);
	});

	const renderCustomerStepContent = (currenStep: number) => {
		switch (currenStep) {
			case 0:
				return renderCustomerAccountDetailFields;
			case 1:
				return renderCustomerPersonalDetailFields;
			case 2:
				return renderCustomerAddressDetailFields;
		}
	};

	const onSubmit = (formValues: any) => {
		if (isCustomer) {
			onSignUp(formValues);
			handleNext();
		} else {
			onSignUp(formValues);
		}
	};

	const renderSignUpForm = (isCustomer: boolean) => {
		if (isCustomer) {
			return (
				<form>
					<Typography className={instructions} variant='body2'>
						{getCustomerStepContent(activeStep)}
					</Typography>
					{renderCustomerStepContent(activeStep)}
					<Grid item className={buttonGroup}>
						<Button
							disabled={activeStep === 0}
							variant='outlined'
							color='secondary'
							onClick={handleBack}
							style={activeStep === 0 ? { visibility: 'hidden' } : { visibility: 'visible' }}>
							Back
						</Button>
						{activeStep === customerSteps.length - 1 ? (
							<Button variant='contained' color='secondary' onClick={handleSubmit(onSubmit)}>
								Sign Up
							</Button>
						) : (
							<Button variant='contained' color='secondary' onClick={handleNext}>
								Next
							</Button>
						)}
					</Grid>
				</form>
			);
		} else {
			return (
				<form>
					{renderAdminAccountDetailFields}
					<Grid item>
						<Button variant='contained' color='secondary' onClick={handleSubmit(onSubmit)}>
							Sign Up
						</Button>
					</Grid>
				</form>
			);
		}
	};

	const renderMenuStepper = (isCustomer: boolean) => {
		if (isCustomer) {
			return <MenuStepper activeStep={activeStep} getSteps={getCustomerSteps} />;
		} else {
			return (
				<Typography className={instructions} variant='body2'>
					Fill in your details!
				</Typography>
			);
		}
	};

	return (
		<>
			{renderMenuStepper(isCustomer)}
			<Grid item className={fieldContainer}>
				{activeStep === customerSteps.length && isCustomer ? (
					<div>
						<Typography className={instructions}>You have successfully signed up!</Typography>
						<Button onClick={handleReset} variant='outlined' color='secondary'>
							Create a new account?
						</Button>
					</div>
				) : (
					renderSignUpForm(isCustomer)
				)}
			</Grid>
		</>
	);
};

export default reduxForm<{}, ISignUpFormProps>({
	form: 'signUpForm',
	destroyOnUnmount: false
})(SignUpForm);
