import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { getDiscountFields } from './DiscountFormStaticContent';
import { renderTextField } from '../FormInputs/FormInputs';

import EditIcon from '@material-ui/icons/Edit';

interface IDiscountFormProps {
	onSubmit: (formValues: any) => void;
}

class DiscountForm extends Component<InjectedFormProps<{}, IDiscountFormProps> & IDiscountFormProps> {
	discountFields = getDiscountFields();

	renderInputIcon = (name: string) => {
		switch (name) {
			case 'discount_code':
			case 'is_expired':
				return <EditIcon />;
			default:
				return <EditIcon />;
		}
	};

	renderDiscountFields = this.discountFields.map(({ name, label }) => {
		return (
			<Grid item key={name}>
				<Field name={name} component={renderTextField} label={label} icon={this.renderInputIcon(name)} />
			</Grid>
		);
	});

	onSubmit = (formValues: any) => {
		this.props.onSubmit(formValues);
	};

	renderDiscountForm = () => {
		return (
			<form>
				{this.renderDiscountFields}
				<Grid item>
					<Button variant='contained' color='secondary' onClick={this.props.handleSubmit(this.onSubmit)}>
						Submit
					</Button>
				</Grid>
			</form>
		);
	};

	render() {
		return <Grid>{this.renderDiscountForm()}</Grid>;
	}
}

export default reduxForm<{}, IDiscountFormProps>({
	form: 'discountForm',
	destroyOnUnmount: true,
	enableReinitialize: true
})(DiscountForm);
