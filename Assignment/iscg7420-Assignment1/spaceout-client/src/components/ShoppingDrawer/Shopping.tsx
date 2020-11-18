import React from 'react';
import ShoppingCards from './ShoppingCards';
import ShoppingCategoryListItem from './ShoppingCategoryListItem';
import { useStyles } from './ShoppingCSS';
import { IconButton, Grid, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import CloseIcon from '@material-ui/icons/Close';

import logoImg from '../../assets/logo.png';

interface IShoppingProps {
	handleDrawerClose: () => void;
}

const Shopping: React.FC<IShoppingProps> = ({ handleDrawerClose }) => {
	const { navigationBarContainer, logoContainer, logo, logoText, iconSize, shoppingCategoryContainer } = useStyles();
	const theme = useTheme();

	const isScreenMedium = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<>
			<Grid container className={navigationBarContainer} justify='space-around' alignItems='center'>
				<Grid item className={logoContainer}>
					<Grid item>
						<img
							className={`${logo} wow rollIn rotatingAnimation`}
							src={logoImg}
							alt='Logo'
							data-wow-duration='2s'
							data-wow-delay='1.5s'
						/>
					</Grid>
					<Grid item className={logoText}>
						Above
					</Grid>
				</Grid>
				<IconButton color='secondary' onClick={handleDrawerClose}>
					<CloseIcon className={iconSize} />
				</IconButton>
			</Grid>
			<Grid container justify='center' alignContent='center' direction='row'>
				<Grid
					container
					item
					lg={4}
					md={12}
					justify={isScreenMedium ? 'center' : 'flex-start'}
					alignContent={isScreenMedium ? 'center' : 'flex-end'}
					direction='column'
					className={shoppingCategoryContainer}>
					<ShoppingCategoryListItem />
				</Grid>
				<ShoppingCards handleDrawerClose={handleDrawerClose} />
			</Grid>
		</>
	);
};

export default Shopping;
