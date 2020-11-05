import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useStyles } from './ShoppingCSS';
import { Grid, Card, CardActionArea, CardMedia, Typography, CardContent } from '@material-ui/core';
import { StoreState } from '../../reducers';
import { IProduct, fetchProducts } from '../../actions';

import PinDropIcon from '@material-ui/icons/PinDrop';
import StarsIcon from '@material-ui/icons/Stars';

import pluto from '../../assets/pluto.png';

const ShoppingCards = () => {
	const products: IProduct[] = useSelector(({ products }: StoreState) => Object.values(products), shallowEqual);
	const dispatch = useDispatch();

	const { infoContainer, iconContainer, cardContainer, productName, cardImageContainer } = useStyles();

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	const renderItemCards = products.map((product) => {
		return (
			<Grid item key={product.id}>
				<Card className={cardContainer}>
					<CardActionArea>
						<CardMedia component='img' image={pluto} title='' className={cardImageContainer} />
						<CardContent>
							<Typography gutterBottom noWrap variant='h5' component='h2' className={productName}>
								{product.name}
							</Typography>
							<Typography
								gutterBottom
								noWrap
								variant='body2'
								color='textSecondary'
								component='p'
								className={infoContainer}>
								<PinDropIcon className={iconContainer} />
								{product.description}
							</Typography>
							<Typography gutterBottom variant='body2' color='textSecondary' component='p' className={infoContainer}>
								<StarsIcon className={iconContainer} />
								{product.price}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Grid>
		);
	});

	return (
		<>
			{console.log(products)}
			<Grid container item justify='flex-start' lg={8} spacing={3}>
				{renderItemCards}
			</Grid>
		</>
	);
};

export default ShoppingCards;
