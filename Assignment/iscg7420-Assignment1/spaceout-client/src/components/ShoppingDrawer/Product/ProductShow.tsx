import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { IProduct, fetchProduct } from '../../../actions';
import { StoreState } from '../../../reducers';
import { Grid } from '@material-ui/core';

import pluto from '../../../assets/pluto.png';

interface IRouteComponentMatchParamProps {
	id: string;
}

// interface ICategory {
// 	id: number;
// 	name: string;
// 	description: string;
// 	image?: string;
// }

const ProductShow: React.FC<RouteComponentProps<IRouteComponentMatchParamProps>> = ({ match }) => {
	const { id: routeId } = match.params;

	const products: IProduct[] = useSelector(({ products }: StoreState) => Object.values(products), shallowEqual);
	const product: IProduct = products.filter((product) => product.id === parseInt(routeId))[0];

	// const [categories, setCategories] = useState<ICategory[]>([]);
	const dispatch = useDispatch();

	// const renderProductCategory = () => {
	// 	if (product)
	// 		product.category.map((categoryId) => {
	// 			fetch(`http://localhost:8000/api/ecommerce/categories/${categoryId}/`, {
	// 				method: 'GET',
	// 				headers: { 'Content-Type': 'application/json' }
	// 			})
	// 				.then((response) => response.json())
	// 				.then((response) => {
	// 					setCategories([...categories, response]);
	// 				})
	// 				.catch((error) => console.error(error));
	// 		});
	// };

	useEffect(() => {
		dispatch(fetchProduct(parseInt(routeId)));
	}, [dispatch, routeId]);

	const renderProduct = () => {
		if (product)
			return (
				<Grid
					container
					alignContent='center'
					direction='column'
					style={{ paddingTop: '5rem', backgroundColor: 'black', color: 'white' }}>
					<Grid item>
						<img src={pluto} alt={product.name} />
					</Grid>
					<Grid item>
						<h1>{product.name}</h1>
					</Grid>
					<Grid item>
						<h2>{product.description}</h2>
					</Grid>
					<Grid item>
						<h3>${product.price}</h3>
					</Grid>
					<Grid item>
						{product.price}
						<h5>Category: {product.category}</h5>
					</Grid>
				</Grid>
			);
	};

	return (
		<>
			{renderProduct()}
			<div>Hi</div>
		</>
	);
};

export default ProductShow;
