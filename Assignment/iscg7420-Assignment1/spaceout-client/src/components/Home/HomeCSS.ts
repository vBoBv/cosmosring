import { makeStyles, useTheme } from '@material-ui/core/styles';
import homeBackground from '../../assets/space.jpg';
import homeBackground1 from '../../assets/space1.jpg';

export const useStyles = makeStyles((theme) => ({
	containerBackground: {
		position: 'relative',
		backgroundImage: `url(${homeBackground})`,
		backgroundPosition: 'top',
		backgroundSize: 'cover',
		backgroundAttachment: 'fixed',
		backgroundRepeat: 'no-repeat',
		height: '100vh'
	},
	containerBackground1: {
		position: 'relative',
		backgroundImage: `url(${homeBackground1})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundAttachment: 'fixed',
		backgroundRepeat: 'no-repeat',
		height: '100vh'
	},
	secondBackground: {
		position: 'relative',
		backgroundColor: 'red',
		height: '100vh'
	},
	headingContainer: {
		zIndex: 1,
		color: 'white',
		height: '100%'
	},
	pageSubHeading1: {
		fontFamily: 'Bungee Hairline, cursive',
		fontSize: '3rem',
		[theme.breakpoints.down('md')]: {
			fontSize: '2.5rem'
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.8rem'
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.4rem'
		}
	},
	pageHeading: {
		fontFamily: 'Nova Cut, cursive',
		fontSize: '5rem',
		[theme.breakpoints.down('md')]: {
			fontSize: '3rem'
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '2rem'
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.5rem'
		}
	},
	newDawnHeading: {
		letterSpacing: '0.2rem',
		textTransform: 'uppercase'
	},
	newDawn: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',

		textAlign: 'center',
		// color: '#008cff',
		color: 'white',
		// backgroundColor: 'black',
		backgroundImage: 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
		margin: '1rem',
		paddingBottom: '2rem'
	},
	newDawnImgItem: {
		width: '350px',
		paddingBottom: '1rem'
	},
	buttonStyle: {
		fontSize: '1rem'
	}
}));
