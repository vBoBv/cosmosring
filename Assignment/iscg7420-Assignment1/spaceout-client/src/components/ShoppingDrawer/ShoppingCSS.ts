import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	navigationBarContainer: {
		color: 'black',
		fontFamily: 'Audiowide, cursive',
		fontSize: '2rem',

		padding: '1rem',
		zIndex: 2
	},
	logoContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center'
	},
	logo: {
		width: '50px',
		height: '50px',
		[theme.breakpoints.down('sm')]: {
			width: '30px',
			height: '30px'
		}
	},
	logoText: {
		paddingLeft: '0.5rem'
	}
}));
