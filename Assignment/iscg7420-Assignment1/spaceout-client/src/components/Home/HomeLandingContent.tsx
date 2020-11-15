import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';
import { useStyles } from './HomeCSS';
import Typed from 'react-typed';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { IUser } from '../../actions';

interface IHomeLandingContentProps {
	account: IUser | null;
	setAccount: (account: IUser | null) => void;
}

const HomeLandingContent: React.FC<IHomeLandingContentProps> = ({ account, setAccount }) => {
	const { headingContainer, pageHeading, pageSubHeading1, getStartedButton, link } = useStyles();

	const onSignOut = () => {
		setAccount(null);
		window.localStorage.setItem('authToken', '');
	};

	return (
		<Grid item container className={headingContainer} direction='column' alignItems='center' justify='center'>
			<Grid item>
				<div className={`${pageHeading} wow fadeIn`}>
					{account ? `Welcome back ${account.username}!` : 'All in one dimension'}
				</div>
			</Grid>
			<Grid item className={pageSubHeading1}>
				--
				<Typed strings={['Browse - Buy - Auction--']} typeSpeed={60} startDelay={3500} showCursor={false} />
			</Grid>
			<Grid item>
				{account ? (
					<Button
						variant='contained'
						color='secondary'
						className={`${getStartedButton} wow fadeIn`}
						endIcon={<ChevronRightIcon />}
						onClick={onSignOut}>
						Sign Out
					</Button>
				) : (
					<Link to='/authentication' className={link}>
						<Button
							variant='contained'
							color='secondary'
							className={`${getStartedButton} wow fadeIn`}
							endIcon={<ChevronRightIcon />}>
							Sign In
						</Button>
					</Link>
				)}
			</Grid>
		</Grid>
	);
};

export default HomeLandingContent;
