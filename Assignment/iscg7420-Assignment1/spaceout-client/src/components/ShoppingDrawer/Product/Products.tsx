import React, { useEffect } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { IProduct, fetchProducts } from '../../../actions';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { StoreState } from '../../../reducers';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';

const Products = () => {
	const products: IProduct[] = useSelector(({ products }: StoreState) => Object.values(products), shallowEqual);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<Grid
			container
			justify='flex-start'
			direction='column'
			style={{ padding: '5rem', backgroundColor: 'black', minHeight: '100vh' }}>
			<Typography>Products</Typography>
			<Grid item container justify='center'>
				<Link to='/products/new' style={{ textDecoration: 'none' }}>
					<Button variant='contained' color='secondary'>
						Create a new product
					</Button>
				</Link>
			</Grid>
			<ProductList products={products} />
		</Grid>
	);
};

export default Products;
