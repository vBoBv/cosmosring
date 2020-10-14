export const getSteps = () => {
	return ['Account Details', 'Personal Details', 'Address Details'];
};

export const getStepContent = (stepIndex: number) => {
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

export const getPersonalDetailFields = () => {
	return [
		{ name: 'email', label: 'Email' },
		{ name: 'lastName', label: 'Last Name' },
		{ name: 'firstName', label: 'First Name' },
		{ name: 'phoneNumber', label: 'Phone Number' },
		{ name: 'streetAddress', label: 'Street Address' }
	];
};

export const getAddressDetailFields = () => {
	return [
		{ name: 'suburb', label: 'Suburb' },
		{ name: 'city', label: 'City' },
		{ name: 'country', label: 'Country' },
		{ name: 'postCode', label: 'Post Code' }
	];
};
