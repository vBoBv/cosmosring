import { makeStyles, useTheme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	authenticationContainer: {
		height: '100vh'
	},
	backgroundContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
		width: '100%',
		zIndex: -1,
		overflow: 'hidden'
	},
	videoContainer: {
		height: '100%',
		width: '100%',
		objectFit: 'cover'
	}
}));
