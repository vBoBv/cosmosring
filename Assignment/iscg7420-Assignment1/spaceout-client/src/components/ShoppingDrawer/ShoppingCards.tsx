import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Card, CardActionArea, CardMedia, Typography, CardActions, Button, CardContent } from '@material-ui/core';

import PinDropIcon from '@material-ui/icons/PinDrop';
import StarsIcon from '@material-ui/icons/Stars';
// import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';

import pluto from '../../assets/pluto.png';

const useStyles = makeStyles((theme: Theme) => ({
	heading: {
		fontFamily: 'Changa, sans-serif',
		marginLeft: '1rem',
		paddingLeft: '0.5rem',
		borderLeft: `5px solid ${theme.palette.primary.main}`,
		[theme.breakpoints.down('md')]: {
			fontSize: '2rem'
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.5rem'
		}
	},
	carouselContainer: {
		width: '85%',
		margin: 'auto',
		marginBottom: '1rem'
	},
	carouselItem: {
		display: 'flex',
		justifyContent: 'center',
		padding: '1rem'
	},
	infoContainer: {
		display: 'flex',
		alignItems: 'center'
	},
	iconContainer: {
		marginRight: '0.5rem'
	},
	cardContainer: {
		maxWidth: 400
	},
	restaurantName: {
		[theme.breakpoints.down('md')]: {
			fontSize: '1.5rem'
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.2rem'
		}
	}
}));

const ShoppingCards = () => {
	const classes = useStyles();
	let i;
	const arrays = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

	const renderItemCards = arrays.map((item) => {
		return (
			<Grid item key={item}>
				<Card className={classes.cardContainer}>
					<CardActionArea>
						<CardMedia component='img' image={pluto} title='' style={{ width: '300px' }} />
						<CardContent>
							<Typography gutterBottom noWrap variant='h5' component='h2' className={classes.restaurantName}>
								Name
							</Typography>
							<Typography
								gutterBottom
								noWrap
								variant='body2'
								color='textSecondary'
								component='p'
								className={classes.infoContainer}>
								<PinDropIcon className={classes.iconContainer} />
								'Description'
							</Typography>
							<Typography
								gutterBottom
								variant='body2'
								color='textSecondary'
								component='p'
								className={classes.infoContainer}>
								<StarsIcon className={classes.iconContainer} />
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
