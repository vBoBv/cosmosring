import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from './HomeCSS';
import ReactPageScroller from 'react-page-scroller';
import HomeLandingContent from './HomeLandingContent';
import HomeLandingAstronaut from './HomeLandingAstronaut';
import StarParticles from '../StarParticles/StarParticles';
import NavigationBar from '../NavigationBar/NavigationBar';

const Home = () => {
	const { containerBackground, containerBackground1 } = useStyles();
	const [currentPage, setCurrentPage] = useState<number>(0);

	const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

	const renderBackgroundImg = () => {
		switch (currentPage) {
			case 0:
				return containerBackground;
			case 1:
				return containerBackground;
			// return containerBackground1;
			default:
				return containerBackground;
		}
	};

	return (
		<Grid container className={renderBackgroundImg()} direction='column'>
			<NavigationBar />
			<Grid container style={{ zIndex: 1 }}>
				<ReactPageScroller
					containerWidth='100vw'
					containerHeight='90vh'
					pageOnChange={handlePageChange}
					customPageNumber={currentPage}>
					<HomeLandingContent />
					<HomeLandingAstronaut pageNumber={currentPage} />
				</ReactPageScroller>
			</Grid>
			<StarParticles />
		</Grid>
	);
};

export default Home;
