import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { getProductFields } from './ProductFormStaticContent';
import { renderTextField } from '../../FormInputs/FormInputs';

import EditIcon from '@material-ui/icons/Edit';

interface IProductFormProps {
	onSubmitForm: (formValues: any) => void;
}

const ProductForm: React.FC<InjectedFormProps<{}, IProductFormProps> & IProductFormProps> = ({
	handleSubmit,
	onSubmitForm
}) => {
	const productFields = getProductFields();

	const renderInputIcon = (name: string) => {
		switch (name) {
			default:
				return <EditIcon />;
		}
	};

	const renderProductFields = productFields.map(({ name, label }) => {
		return (
			<Grid item key={name}>
				<Field name={name} component={renderTextField} label={label} icon={renderInputIcon(name)} />
			</Grid>
		);
	});

	const onSubmit = (formValues: any) => {
		onSubmitForm(formValues);
	};

	const renderProductForm = () => {
		return (
			<form>
				{renderProductFields}
				<Grid item>
					<Button variant='contained' color='secondary' onClick={handleSubmit(onSubmit)}>
						Submit
					</Button>
				</Grid>
			</form>
		);
	};

	return <Grid>{renderProductForm()}</Grid>;
};

export default reduxForm<{}, IProductFormProps>({
	form: 'productForm',
	destroyOnUnmount: true,
	enableReinitialize: true
})(ProductForm);
