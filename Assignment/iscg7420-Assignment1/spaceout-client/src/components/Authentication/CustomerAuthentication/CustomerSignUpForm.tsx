import React, { useState, FormEvent } from 'react';
import { Grid, Button, Input } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import { renderTextField } from '../../FormInputs/FormInputs';

import AccountCircle from '@material-ui/icons/AccountCircle';

// interface ICustomerSignUpForm {
// 	username: string;
// 	password1: string;
// 	password2: string;
// 	email: string;
// 	firstName: string;
// 	lastName: string;
// 	phoneNumber: string;
// 	streetAddress: string;
// 	suburb: string;
// 	city: string;
// 	country: string;
// 	postcode: number;
// }

const CustomerSignUpForm = () => {
	// const [formValue, setFormValue] = useState<ICustomerSignUpForm>({
	// 	username: '',
	// 	password1: '',
	// 	password2: '',
	// 	email: '',
	// 	firstName: '',
	// 	lastName: '',
	// 	phoneNumber: '',
	// 	streetAddress: '',
	// 	suburb: '',
	// 	city: '',
	// 	country: '',
	// 	postcode: 0
	// });

	// const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
	// 	setFormValue({ ...formValue, [event.currentTarget.name]: event.currentTarget.value });
	// };

	return (
		<>
			<Grid item>
				<Field name='firstName' component={renderTextField} label='First Name' icon={<AccountCircle />} />
			</Grid>
			<Grid item>
				<Button variant='outlined' color='secondary'>
					Sign Up
				</Button>
			</Grid>
		</>
	);
};

// export default CustomerSignUpForm;
export default reduxForm({
	form: 'customerSignUpForm',
	destroyOnUnmount: false
})(CustomerSignUpForm);
