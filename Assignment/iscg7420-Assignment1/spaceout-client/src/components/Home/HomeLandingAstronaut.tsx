import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './HomeCSS';
import WOW from 'wowjs';

import astronaut from '../../assets/astronaut.png';
import pluto from '../../assets/pluto.png';
import galaxy from '../../assets/space-shuttle.png';

interface IHomeLandingAstronaut {
	pageNumber: number;
}

const HomeLandingAstronaut: React.FC<IHomeLandingAstronaut> = ({ pageNumber }) => {
	const { headingContainer, newDawnHeading, newDawn, newDawnImgItem } = useStyles();

	useEffect(() => {
		new WOW.WOW({
			live: false
		}).init();
	}, []);

	return (
		<Grid item container className={headingContainer} direction='row' alignItems='flex-start' justify='center'>
			<Grid item container lg={12} justify='center'>
				<Typography variant='h2' className={newDawnHeading}>
					It's a new dawn
				</Typography>
			</Grid>
			<Grid item lg={4} className={newDawn}>
				<img
					src={pageNumber === 1 ? astronaut : ''}
					className={`${newDawnImgItem} ${pageNumber === 1 ? 'wow fadeInLeft animated animated' : null}`}
					alt={pageNumber === 1 ? 'Astronaut' : ''}
					style={pageNumber === 1 ? { visibility: 'visible', animationDuration: '2s', animationDelay: '0.5s' } : {}}
				/>
			</Grid>
			<Grid item lg={4} className={newDawn}>
				<img
					src={pageNumber === 1 ? pluto : ''}
					className={`${newDawnImgItem} ${pageNumber === 1 ? 'wow rotateIn animated animated' : null}`}
					alt={pageNumber === 1 ? 'Planet' : ''}
					style={pageNumber === 1 ? { visibility: 'visible', animationDuration: '2s', animationDelay: '0.5s' } : {}}
					// data-wow-duration='2s'
					// data-wow-delay='0.5s'
					// src={pluto}
					// className={`${newDawnImgItem} wow rotateIn`}
					// alt='Planet'
					// data-wow-duration='2s'
					// data-wow-delay='0.5s'
				/>
			</Grid>
			<Grid item lg={4} className={newDawn}>
				<img
					src={pageNumber === 1 ? galaxy : ''}
					className={`${newDawnImgItem} ${pageNumber === 1 ? 'wow fadeInRight animated animated' : null}`}
					alt={pageNumber === 1 ? 'Galaxy' : ''}
					style={pageNumber === 1 ? { visibility: 'visible', animationDuration: '2s', animationDelay: '0.5s' } : {}}
				/>
			</Grid>
		</Grid>
	);
};

export default HomeLandingAstronaut;
