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
	}
}));
