import React, { useEffect } from 'react';
import { Button, Grid, Typography, Chip } from '@material-ui/core';
import { useStyles } from './HomeCSS';
import WOW from 'wowjs';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

import astronaut from '../../assets/astronaut.png';
import pluto from '../../assets/pluto.png';
import galaxy from '../../assets/space-shuttle.png';

interface IHomeLandingAstronaut {
	pageNumber: number;
}

const HomeLandingAstronaut: React.FC<IHomeLandingAstronaut> = ({ pageNumber }) => {
	const { headingContainer, newDawnHeading, newDawn, newDawnImgItem, buttonStyle } = useStyles();
	const buttonIcon = 35;

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
			{pageNumber === 1 ? (
				<>
					<Grid item lg={3} className={newDawn}>
						<img
							src={pageNumber === 1 ? astronaut : ''}
							className={`${newDawnImgItem} ${pageNumber === 1 ? 'wow fadeInLeft animated animated' : null}`}
							alt={pageNumber === 1 ? 'Astronaut' : ''}
							style={pageNumber === 1 ? { visibility: 'visible', animationDuration: '2s', animationDelay: '0.3s' } : {}}
						/>
						<Button
							variant='outlined'
							color='inherit'
							startIcon={<FingerprintIcon style={{ fontSize: buttonIcon }} />}
							className={`${buttonStyle} ${pageNumber === 1 ? 'wow fadeInUpBig animated animated' : null}`}
							style={pageNumber === 1 ? { visibility: 'visible', animationDuration: '2s', animationDelay: '1s' } : {}}>
							Get to know us
						</Button>
					</Grid>
					<Grid item lg={3} className={newDawn}>
						<img
							src={pageNumber === 1 ? pluto : ''}
							className={`${newDawnImgItem} ${pageNumber === 1 ? 'wow rotateIn animated animated' : null}`}
							alt={pageNumber === 1 ? 'Planet' : ''}
							style={pageNumber === 1 ? { visibility: 'visible', animationDuration: '2s', animationDelay: '0.3s' } : {}}
						/>
						<Button
							variant='outlined'
							color='inherit'
							startIcon={<FingerprintIcon style={{ fontSize: buttonIcon }} />}
							className={`${buttonStyle} ${pageNumber === 1 ? 'wow fadeInUpBig animated animated' : null}`}
							style={pageNumber === 1 ? { visibility: 'visible', animationDuration: '2s', animationDelay: '1s' } : {}}>
							Browse
						</Button>
					</Grid>
					<Grid item lg={3} className={newDawn}>
						<img
							src={pageNumber === 1 ? galaxy : ''}
							className={`${newDawnImgItem} ${pageNumber === 1 ? 'wow fadeInRight animated animated' : null}`}
							alt={pageNumber === 1 ? 'Galaxy' : ''}
							style={pageNumber === 1 ? { visibility: 'visible', animationDuration: '2s', animationDelay: '0.3s' } : {}}
						/>
						<Button
							variant='outlined'
							color='inherit'
							startIcon={<FingerprintIcon style={{ fontSize: buttonIcon }} />}
							className={`${buttonStyle} ${pageNumber === 1 ? 'wow fadeInUpBig animated animated' : null}`}
							style={pageNumber === 1 ? { visibility: 'visible', animationDuration: '2s', animationDelay: '1s' } : {}}>
							Become a Seller
						</Button>
					</Grid>
				</>
			) : null}
		</Grid>
	);
};

export default HomeLandingAstronaut;
