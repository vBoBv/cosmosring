import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from './HomeCSS';
import ReactPageScroller from 'react-page-scroller';
import HomeLandingContent from './HomeLandingContent';
import HomeLandingContent2 from './HomeLandingContent2';
import StarParticles from '../StarParticles/StarParticles';
import NavigationBar from '../NavigationBar/NavigationBar';

const Home = () => {
	const { containerBackground } = useStyles();
	const [currentPage, setCurrentPage] = useState<number>(0);

	const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

	return (
		<Grid container className={containerBackground} direction='column'>
			<NavigationBar />
			<Grid container style={{ zIndex: 1 }}>
				<ReactPageScroller
					containerWidth='100vw'
					containerHeight='90vh'
					pageOnChange={handlePageChange}
					customPageNumber={currentPage}>
					<HomeLandingContent />
					<HomeLandingContent2 />
				</ReactPageScroller>
			</Grid>
			<StarParticles />
		</Grid>
	);
};

export default Home;
