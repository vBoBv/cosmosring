import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from './HomeCSS';
import ReactPageScroller from 'react-page-scroller';
import HomeLandingContent from './HomeLandingContent';
import HomeLandingAstronaut from './HomeLandingAstronaut';
import StarParticles from '../StarParticles/StarParticles';
import { IUser } from '../../actions';
import { useSelector, shallowEqual } from 'react-redux';
import { StoreState } from '../../reducers';

const Home = () => {
	const { containerBackground } = useStyles();
	const [currentPage, setCurrentPage] = useState<number>(0);

	const [account, setAccount] = useState<IUser | null>(null);
	const [authToken] = useState<String | null>(window.localStorage.getItem('authToken'));

	const user: IUser = useSelector(({ users }: StoreState) => Object.values(users), shallowEqual)[0];
	const API_URL =
		process.env.NODE_ENV === 'development'
			? 'http://localhost:8000/api/user/profile/'
			: 'http://ec2-3-25-136-35.ap-southeast-2.compute.amazonaws.com/api/user/profile/';

	useEffect(() => {
		if (authToken) {
			fetch(API_URL, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Token ${window.localStorage.getItem('authToken')}`
				}
			})
				.then((response) => response.json())
				.then((response) => {
					setAccount(response);
				});
		} else {
			return;
		}
	}, [authToken, user, API_URL]);

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
			<Grid container style={{ zIndex: 1 }}>
				<ReactPageScroller
					containerWidth='100vw'
					containerHeight='90vh'
					pageOnChange={handlePageChange}
					customPageNumber={currentPage}>
					<HomeLandingContent account={account} setAccount={setAccount} />
					<HomeLandingAstronaut pageNumber={currentPage} />
				</ReactPageScroller>
			</Grid>
			<StarParticles />
		</Grid>
	);
};

export default Home;
