import React from 'react';
import ShoppingCards from './ShoppingCards';
import ShoppingCategoryListItem from './ShoppingCategoryListItem';
import { useStyles } from './ShoppingCSS';
import { IconButton, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import logoImg from '../../assets/logo.png';

interface IShoppingProps {
	handleDrawerClose: () => void;
}

const Shopping: React.FC<IShoppingProps> = ({ handleDrawerClose }) => {
	const { navigationBarContainer, logoContainer, logo, logoText } = useStyles();

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
					<CloseIcon style={{ fontSize: '4rem' }} />
				</IconButton>
			</Grid>
			<Grid container justify='center' alignContent='center' direction='row'>
				<Grid
					container
					item
					lg={4}
					justify='flex-start'
					alignContent='flex-end'
					direction='column'
					style={{ paddingRight: '2rem' }}>
					<ShoppingCategoryListItem />
				</Grid>
				<ShoppingCards />
			</Grid>
		</>
	);
};

export default Shopping;
