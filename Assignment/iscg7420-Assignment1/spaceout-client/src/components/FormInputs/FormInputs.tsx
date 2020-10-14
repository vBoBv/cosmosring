import React from 'react';
import {
	Grid,
	TextField,
	Checkbox,
	RadioGroup,
	Select,
	InputBaseComponentProps,
	InputAdornment
} from '@material-ui/core';

interface ITextFieldProps {
	input: InputBaseComponentProps;
	label: string;
	icon: any;
	meta: {
		touched: boolean;
		error: string;
	};
}

export const renderTextField: React.FC<ITextFieldProps> = ({ input, label, icon, meta: { touched, error } }) => (
	// <Grid container spacing={1} alignItems='flex-end'>
	// 	<Grid item>{icon}</Grid>
	// 	<Grid item>
	// 		<TextField id='input-with-icon-grid' label={label}  />
	// 	</Grid>
	// </Grid>
	<TextField
		// hintText={label}
		// floatingLabelText={label}
		// errorText={touched && error}
		// {...input}
		// {...custom}
		label={label}
		helperText={touched && error}
		error={error ? true : false}
		inputProps={
			// startAdornment: <InputAdornment position='start'>{icon}</InputAdornment>
			input
		}
		InputProps={{
			startAdornment: <InputAdornment position='start'>{icon}</InputAdornment>
		}}
	/>
);

// export const renderCheckbox = ({ input, label }) => (
// 	<Checkbox label={label} checked={input.value ? true : false} onCheck={input.onChange} />
// );

// export const renderRadioGroup = ({ input, ...rest }) => (
// 	<RadioGroup {...input} {...rest} valueSelected={input.value} onChange={(event, value) => input.onChange(value)} />
// );

// export const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
// 	<Select
// 		floatingLabelText={label}
// 		errorText={touched && error}
// 		{...input}
// 		onChange={(event, index, value) => input.onChange(value)}
// 		children={children}
// 		{...custom}
// 	/>
// );
