import { makeStyles, useTheme } from '@material-ui/core/styles';
import backgroundImage from '../../assets/space1.jpg';

export const useStyles = makeStyles((theme) => ({
	authenticationContainer: {
		height: '100vh',
		backgroundImage: `url(${backgroundImage})`,
		backgroundSize: 'cover',
		backgroundPosition: 'top'
	},
	formContainer: {
		height: '60vh',
		margin: '10rem 20rem 10rem 20rem',
		position: 'relative'
	},
	backgroundContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
		width: '40%',
		zIndex: 0,
		overflow: 'hidden',
		borderTopLeftRadius: '2rem',
		borderBottomLeftRadius: '2rem'
	},
	videoContainer: {
		height: '100%',
		width: '100%',
		objectFit: 'cover'
	},
	formItem1: {
		width: '40%',
		height: '100%',
		color: 'white',
		zIndex: 1
	},
	formItem1_heading: {
		fontFamily: 'Audiowide, cursive'
	},
	formItem1_subtitle: {
		textAlign: 'center',
		padding: '2rem 4rem 2rem 4rem'
	},
	formItem2: {
		width: '60%',
		height: '100%',
		color: 'white',
		backgroundImage: 'linear-gradient(to right bottom, rgba(255,255,255, 0.1), rgba(0,0,0, 1))',
		borderTopRightRadius: '2rem',
		borderBottomRightRadius: '2rem'
	},
	instructions: {
		color: 'white',
		marginTop: '1rem',
		marginBottom: '1rem'
	},
	fieldContainer: {
		textAlign: 'center',
		width: '80%'
	},
	fieldItem: {
		marginBottom: '1rem'
	},
	buttonGroup: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	switchContainer: {
		position: 'absolute',
		top: '10px',
		right: '10px'
	}
}));
