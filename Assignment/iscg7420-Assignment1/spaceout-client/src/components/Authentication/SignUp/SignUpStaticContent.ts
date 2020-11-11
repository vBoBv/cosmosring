export const getCustomerSteps = () => {
	return ['Account Details', 'Personal Details', 'Address Details'];
};

export const getCustomerStepContent = (stepIndex: number) => {
	switch (stepIndex) {
		case 0:
			return 'Fill in your account details!';
		case 1:
			return 'Fill in your personal details!';
		case 2:
			return 'Fill in your address details!';
		default:
			return '';
	}
};

export const getAccountDetailFields = () => {
	return [
		{ name: 'email', label: 'Email' },
		{ name: 'username', label: 'Username' },
		{ name: 'password', label: 'Password' }
	];
};

export const getCustomerPersonalDetailFields = () => {
	return [
		{ name: 'last_name', label: 'Last Name' },
		{ name: 'first_name', label: 'First Name' },
		{ name: 'phone_number', label: 'Phone Number' },
		{ name: 'street_address', label: 'Street Address' }
	];
};

export const getCustomerAddressDetailFields = () => {
	return [
		{ name: 'suburb', label: 'Suburb' },
		{ name: 'city', label: 'City' },
		{ name: 'country', label: 'Country' },
		{ name: 'postcode', label: 'Post Code' }
	];
};

export const getAdminAccountDetailFields = () => {
	return [
		{ name: 'username', label: 'Username' },
		{ name: 'email', label: 'Email' },
		{ name: 'password', label: 'Password' }
	];
};

// export const getSteps = () => {
// 	return ['Account Details', 'Personal Details', 'Address Details'];
// };

// export const getStepContent = (stepIndex: number) => {
// 	switch (stepIndex) {
// 		case 0:
// 			return 'Fill in your account details!';
// 		case 1:
// 			return 'Fill in your personal details!';
// 		case 2:
// 			return 'Fill in your address details!';
// 		default:
// 			return '';
// 	}
// };

// export const getAccountDetailFields = () => {
// 	return [
// 		{ name: 'username', label: 'Username' },
// 		{ name: 'password1', label: 'Password' },
// 		{ name: 'password2', label: 'Confirm Password' }
// 	];
// };

// export const getPersonalDetailFields = () => {
// 	return [
// 		{ name: 'email', label: 'Email' },
// 		{ name: 'lastName', label: 'Last Name' },
// 		{ name: 'firstName', label: 'First Name' },
// 		{ name: 'phoneNumber', label: 'Phone Number' },
// 		{ name: 'streetAddress', label: 'Street Address' }
// 	];
// };

// export const getAddressDetailFields = () => {
// 	return [
// 		{ name: 'suburb', label: 'Suburb' },
// 		{ name: 'city', label: 'City' },
// 		{ name: 'country', label: 'Country' },
// 		{ name: 'postCode', label: 'Post Code' }
// 	];
// };
