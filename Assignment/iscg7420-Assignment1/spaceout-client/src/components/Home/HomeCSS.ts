import { makeStyles, useTheme } from '@material-ui/core/styles';
import homeBackground from '../../assets/space.jpg';

export const useStyles = makeStyles((theme) => ({
	containerBackground: {
		backgroundImage: `url(${homeBackground})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundAttachment: 'fixed',
		backgroundRepeat: 'no-repeat',
		height: '100vh'
	},
	starParticles: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100vh',
		width: '100%'
	}
}));
