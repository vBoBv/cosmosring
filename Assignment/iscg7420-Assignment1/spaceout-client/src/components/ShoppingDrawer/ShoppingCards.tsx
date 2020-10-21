import React from 'react';
import { useStyles } from './ShoppingCSS';
import { Grid, Card, CardActionArea, CardMedia, Typography, CardContent } from '@material-ui/core';

import PinDropIcon from '@material-ui/icons/PinDrop';
import StarsIcon from '@material-ui/icons/Stars';

import pluto from '../../assets/pluto.png';

const ShoppingCards = () => {
	const { infoContainer, iconContainer, cardContainer, restaurantName, cardImageContainer } = useStyles();
	const arrays = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

	const renderItemCards = arrays.map((item) => {
		return (
			<Grid item key={item}>
				<Card className={cardContainer}>
					<CardActionArea>
						<CardMedia component='img' image={pluto} title='' className={cardImageContainer} />
						<CardContent>
							<Typography gutterBottom noWrap variant='h5' component='h2' className={restaurantName}>
								Name
							</Typography>
							<Typography
								gutterBottom
								noWrap
								variant='body2'
								color='textSecondary'
								component='p'
								className={infoContainer}>
								<PinDropIcon className={iconContainer} />
								'Description'
							</Typography>
							<Typography gutterBottom variant='body2' color='textSecondary' component='p' className={infoContainer}>
								<StarsIcon className={iconContainer} />
								'Price'
							</Typography>
						</CardContent>
					</CardActionArea>
					{/* <CardActions>
						<Button size='small' color='secondary' startIcon={<DynamicFeedIcon />} href=''>
							More Info
						</Button>
					</CardActions> */}
				</Card>
			</Grid>
		);
	});

	return (
		<Grid container item justify='flex-start' lg={8} spacing={3}>
			{renderItemCards}
		</Grid>
	);
};

export default ShoppingCards;
