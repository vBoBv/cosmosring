import React, { useEffect } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { useStyles } from './HomeCSS';
import WOW from 'wowjs';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

import astronaut from '../../assets/astronaut.png';
import pluto from '../../assets/pluto.png';
import spaceShuttle from '../../assets/space-shuttle.png';

interface IHomeLandingAstronaut {
	pageNumber: number;
}

const HomeLandingAstronaut: React.FC<IHomeLandingAstronaut> = ({ pageNumber }) => {
	const { headingContainer, newDawnHeading, newDawn, newDawnImgItem, buttonStyle } = useStyles();
	const buttonIcon = 35;
	const cards = [
		{
			src: spaceShuttle,
			alt: 'Space-Shuttle',
			buttonText: 'Become a Seller'
		},
		{
			src: astronaut,
			alt: 'Astronaut',
			buttonText: 'Get to know us'
		},
		{
			src: pluto,
			alt: 'Planet',
			buttonText: 'Browse'
		}
	];

	useEffect(() => {
		new WOW.WOW({
			live: false
		}).init();
	}, []);

	const renderCardContent = cards.map(({ src, alt, buttonText }, index) => {
		return (
			<Grid item lg={3} className={newDawn} key={alt}>
				<img
					src={pageNumber === 1 ? src : ''}
					className={`${newDawnImgItem} ${
						pageNumber === 1
							? `wow ${index === 0 ? 'fadeInLeft' : index === 1 ? 'rotateIn' : 'fadeInRight'} animated animated`
							: null
					}`}
					alt={pageNumber === 1 ? alt : ''}
					style={pageNumber === 1 ? { visibility: 'visible', animationDuration: '2s', animationDelay: '0.3s' } : {}}
				/>
				<Button
					variant='outlined'
					color='inherit'
					startIcon={<FingerprintIcon style={{ fontSize: buttonIcon }} />}
					className={`${buttonStyle} ${pageNumber === 1 ? 'wow fadeInUpBig animated animated' : null}`}
					style={
						pageNumber === 1
							? {
									visibility: 'visible',
									animationDuration: '2s',
									animationDelay: `${index === 0 ? '1.6s' : index === 1 ? '1.3s' : '1s'}`
							  }
							: {}
					}>
					{buttonText}
				</Button>
			</Grid>
		);
	});

	return (
		<Grid item container className={headingContainer} direction='row' alignItems='flex-start' justify='center'>
			<Grid item container lg={12} justify='center'>
				<Typography variant='h2' className={newDawnHeading}>
					It's a new dawn
				</Typography>
			</Grid>
			{pageNumber === 1 ? renderCardContent : null}
		</Grid>
	);
};

export default HomeLandingAstronaut;
