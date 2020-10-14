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
			startAdornment: <InputAdornment position='start'>{icon}</InputAdornment>
		}}
	/>
);

export const renderSelectField: React.FC<IInputProps> = ({ input, label, meta: { touched, error } }) => (
	<FormControl>
		<InputLabel shrink>Country</InputLabel>
		<Select label={label} inputProps={input} displayEmpty>
			<MenuItem value=''>
				<em>None</em>
			</MenuItem>
			<MenuItem value='Auckland'>Auckland</MenuItem>
			<MenuItem value='Christchurch'>Christchurch</MenuItem>
			<MenuItem value='Wellington'>Wellington</MenuItem>
		</Select>
		<FormHelperText>{touched && error}</FormHelperText>
	</FormControl>
);
