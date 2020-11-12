import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IProduct, fetchProduct, editProduct } from '../../../actions';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { StoreState } from '../../../reducers';
import ProductForm from './ProductForm';
import _ from 'lodash';

interface IRouteComponentMatchParamProps {
	id: string;
}

const ProductEdit: React.FC<RouteComponentProps<IRouteComponentMatchParamProps>> = ({ match }) => {
	const { id: routeId } = match.params;

	const products: IProduct[] = useSelector(({ products }: StoreState) => Object.values(products), shallowEqual);
	const product: IProduct = products.filter((product) => product.id === parseInt(routeId))[0];

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProduct(parseInt(routeId)));
	}, [dispatch, routeId]);

	const onSubmit = (formValues: any) => {
		dispatch(editProduct(parseInt(routeId), formValues));
	};

	return (
		<div style={{ backgroundColor: 'grey', paddingTop: '5rem' }}>
			<h1>Edit Product</h1>
			<ProductForm initialValues={_.pick(product, 'name', 'price', 'description')} onSubmitForm={onSubmit} />
		</div>
	);
};

export default ProductEdit;
