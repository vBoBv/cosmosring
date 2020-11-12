import React from 'react';
import { createProduct } from '../../../actions';
import { useDispatch } from 'react-redux';

import ProductForm from './ProductForm';

const ProductCreate = () => {
	const dispatch = useDispatch();

	const onSubmit = (formValues: any) => {
		dispatch(createProduct(formValues));
	};

	return (
		<div style={{ backgroundColor: 'black', paddingTop: '5rem' }}>
			<h1>Create Product</h1>
			<ProductForm onSubmitForm={onSubmit} />
		</div>
	);
};

export default ProductCreate;
