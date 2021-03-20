import React from 'react';
import { TextField, Select, InputBaseComponentProps, InputAdornment, InputLabel, MenuItem } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

interface IInputProps {
	input: InputBaseComponentProps;
	label: string;
	icon: any;
	meta: {
		touched: boolean;
		error: string;
	};
}

export const renderTextField: React.FC<IInputProps> = ({ input, label, icon, meta: { touched, error } }) => (
	<TextField
		label={label}
		helperText={touched && error}
		error={error ? true : false}
		inputProps={input}
		InputProps={{
			startAdornment: <InputAdornment position='start'>{icon}</InputAdornment>,
			style: { color: 'white' }
		}}
		fullWidth
		color='secondary'
		type={label === 'Password' || label === 'Confirm Password' ? 'password' : 'text'}
		multiline={label === 'Description' ? true : false}
	/>
);

export const renderSelectField: React.FC<IInputProps> = ({ input, label, meta: { touched, error } }) => (
	<FormControl style={{ width: '100%' }}>
		<InputLabel shrink>City</InputLabel>
		<Select label={label} inputProps={input} displayEmpty>
			<MenuItem value=''>
				<em>None</em>
			</MenuItem>
			<MenuItem value='AKL'>Auckland</MenuItem>
			<MenuItem value='CHC'>Christchurch</MenuItem>
			<MenuItem value='WELL'>Wellington</MenuItem>
		</Select>
		<FormHelperText>{touched && error}</FormHelperText>
	</FormControl>
);
