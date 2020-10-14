import { makeStyles, useTheme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		color: 'white'
	},
	stepperContainer: {
		backgroundColor: 'transparent'
	},
	instructions: {
		color: 'white'
	}
}));
