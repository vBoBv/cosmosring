import { createMuiTheme } from '@material-ui/core/styles';

export const customTheme = createMuiTheme({
	overrides: {
		MuiFormLabel: { root: { color: 'white', fontSize: '1.2rem' } },
		MuiFormControlLabel: {
			root: {
				color: 'white'
			}
		},
		MuiInput: {
			input: {
				'&::placeholder': {
					color: 'gray'
				},
				color: 'white'
			},
			underline: {
				'&:before': {
					borderBottom: '1px solid white'
				},
				'&:hover:not($disabled):before': {
					borderBottom: '1px solid grey'
				}
			}
		}
	},

	palette: {
		action: {
			disabledBackground: 'white',
			disabled: 'white'
		}
	}
});
