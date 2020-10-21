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
	},
	infoContainer: {
		display: 'flex',
		alignItems: 'center'
	},
	iconContainer: {
		marginRight: '0.5rem'
	},
	cardContainer: {
		maxWidth: 400
	},
	restaurantName: {
		[theme.breakpoints.down('md')]: {
			fontSize: '1.5rem'
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.2rem'
		}
	},
	productCategory: {
		width: '100%',
		maxWidth: 300,
		backgroundColor: theme.palette.background.paper
	},
	drawer: {
		width: '100%'
	},
	iconSize: {
		fontSize: '4rem'
	},
	shoppingCategoryContainer: {
		paddingRight: '2rem'
	}
}));
