import React, { useState } from 'react';
import MenuStepper from '../../MenuStepper/MenuStepper';
import { Grid, Button, Typography } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import { renderTextField, renderSelectField } from '../../FormInputs/FormInputs';
import { useStyles } from '../AuthenticationCSS';
import {
	getSteps,
	getStepContent,
	getAccountDetailFields,
	getPersonalDetailFields,
	getAddressDetailFields
} from './CustomerSignUpStaticContent';

import AccountCircle from '@material-ui/icons/AccountCircle';

const CustomerSignUpForm = () => {
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

	const steps = getSteps();
	const accountDetailFields = getAccountDetailFields();
	const personalDetailFields = getPersonalDetailFields();
	const addressDetailFields = getAddressDetailFields();

	const renderAccountDetailFields = accountDetailFields.map(({ name, label }) => {
		return (
			<Grid item key={name} className={fieldItem}>
				<Field name={name} component={renderTextField} label={label} icon={<AccountCircle />} />
			</Grid>
		);
	});

	const renderPersonalDetailFields = personalDetailFields.map(({ name, label }) => {
		return (
			<Grid item key={name} className={fieldItem}>
				<Field name={name} component={renderTextField} label={label} icon={<AccountCircle />} />
			</Grid>
		);
	});

	const renderAddressDetailFields = addressDetailFields.map(({ name, label }) => {
		return (
			<Grid item key={name} className={fieldItem}>
				<Field
					name={name}
					component={name === 'city' ? renderSelectField : renderTextField}
					label={label}
					icon={<AccountCircle />}
				/>
			</Grid>
		);
	});

	const renderStepContent = (currenStep: number) => {
		switch (currenStep) {
			case 0:
				return renderAccountDetailFields;
			case 1:
				return renderPersonalDetailFields;
			case 2:
				return renderAddressDetailFields;
		}
	};

	return (
		<>
			<MenuStepper activeStep={activeStep} getSteps={getSteps} />
			<Grid item className={fieldContainer}>
				{activeStep === steps.length ? (
					<div>
						<Typography className={instructions}>You have successfully signed up!</Typography>
						<Button onClick={handleReset} variant='outlined' color='secondary'>
							Create a new account?
						</Button>
					</div>
				) : (
					<div>
						<Typography className={instructions} variant='body2'>
							{getStepContent(activeStep)}
						</Typography>
						{renderStepContent(activeStep)}
						<Grid item className={buttonGroup}>
							<Button
								disabled={activeStep === 0}
								variant='outlined'
								color='secondary'
								onClick={handleBack}
								style={activeStep === 0 ? { visibility: 'hidden' } : { visibility: 'visible' }}>
								Back
							</Button>
							<Button variant='contained' color='secondary' onClick={handleNext}>
								{activeStep === steps.length - 1 ? 'Sign Up' : 'Next'}
							</Button>
						</Grid>
					</div>
				)}
			</Grid>
		</>
	);
};

export default reduxForm({
	form: 'customerSignUpForm',
	destroyOnUnmount: false
})(CustomerSignUpForm);
