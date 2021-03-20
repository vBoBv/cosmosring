import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { getCategoryFields } from './CategoryFormStaticContent';
import { renderTextField } from '../FormInputs/FormInputs';

import EditIcon from '@material-ui/icons/Edit';

interface ICategoryFormProps {
	onSubmit: (formValues: any) => void;
}

class CategoryForm extends Component<InjectedFormProps<{}, ICategoryFormProps> & ICategoryFormProps> {
	categoryFields = getCategoryFields();

	renderInputIcon = (name: string) => {
		switch (name) {
			case 'email':
			case 'description':
				return <EditIcon />;
			default:
				return <EditIcon />;
		}
	};

	renderCategoryFields = this.categoryFields.map(({ name, label }) => {
		return (
			<Grid item key={name} style={{ marginBottom: '1rem' }}>
				<Field name={name} component={renderTextField} label={label} icon={this.renderInputIcon(name)} />
			</Grid>
		);
	});

	onSubmit = (formValues: any) => {
		this.props.onSubmit(formValues);
	};

	renderCategoryForm = () => {
		return (
			<form>
				{this.renderCategoryFields}
				<Grid item>
					<Button variant='contained' color='secondary' onClick={this.props.handleSubmit(this.onSubmit)}>
						Submit
					</Button>
				</Grid>
			</form>
		);
	};

	render() {
		return <Grid>{this.renderCategoryForm()}</Grid>;
	}
}

export default reduxForm<{}, ICategoryFormProps>({
	form: 'categoryForm',
	destroyOnUnmount: true,
	enableReinitialize: true
})(CategoryForm);
