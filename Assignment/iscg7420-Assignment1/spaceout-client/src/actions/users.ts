import { Users } from '../apis/users';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';
import history from '../components/history';

export interface ILoginForm {
	email: string;
	password: string;
}

export interface ICustomerForm {
	email: string;
	password: string;
	username: string;
	first_name: string;
	last_name: string;
	phone_number: string;
	street_address: string;
	suburb: string;
	city: string;
	country: string;
	postcode: number;
}

export interface IOrderManagerForm {
	email: string;
	password: string;
	username: string;
}

export interface IToken {
	token: string;
}

export interface IUser {
	email: string;
	username: string;
}

export interface ICustomer {
	user: {
		email: string;
		password: string;
		username: string;
	};
	first_name: string;
	last_name: string;
	phone_number: string;
	street_address: string;
	suburb: string;
	city: string;
	country: string;
	postcode: number;
}

export interface IOrderManager {
	user: {
		email: string;
		password: string;
		username: string;
	};
}

export interface ILoginUser {
	type: ActionTypes.loginUser;
	payload: IUser;
}

export interface ISignUpCustomer {
	type: ActionTypes.signUpCustomer;
	payload: IUser;
}

export interface ISignUpOrderManager {
	type: ActionTypes.signUpOrderManager;
	payload: IUser;
}

export const loginUser = (formValues: ILoginForm) => {
	return async (dispatch: Dispatch) => {
		const { data: responseToken } = await Users.retrieveToken(formValues);
		const authToken = responseToken.token;
		window.localStorage.setItem('authToken', authToken);

		const { data } = await Users.login();

		dispatch<ILoginUser>({
			type: ActionTypes.loginUser,
			payload: data
		});

		history.push('/');
	};
};

export const signUpCustomer = ({
	email,
	password,
	username,
	first_name,
	last_name,
	phone_number,
	street_address,
	suburb,
	city,
	country,
	postcode
}: ICustomerForm) => {
	const submittedFormValues = {
		user: {
			email: email,
			password: password,
			username: username
		},
		first_name: first_name,
		last_name: last_name,
		phone_number: phone_number,
		street_address: street_address,
		suburb: suburb,
		city: city,
		country: country,
		postcode: postcode
	};

	return async (dispatch: Dispatch) => {
		const { data: customerInfo } = await Users.signUpCustomer(submittedFormValues);
		const { data: responseToken } = await Users.retrieveToken({
			email: customerInfo.user.email,
			password: password
		});
		const authToken = responseToken.token;
		window.localStorage.setItem('authToken', authToken);

		const { data } = await Users.login();

		dispatch<ISignUpCustomer>({
			type: ActionTypes.signUpCustomer,
			payload: data
		});
	};
};

export const signUpOrderManager = ({ email, password, username }: IOrderManagerForm) => {
	const submittedFormValues = {
		user: {
			email: email,
			password: password,
			username: username
		}
	};
	return async (dispatch: Dispatch) => {
		const { data: orderManagerInfo } = await Users.signUpOrderManager(submittedFormValues);
		const { data: responseToken } = await Users.retrieveToken({
			email: orderManagerInfo.user.email,
			password: password
		});
		const authToken = responseToken.token;
		window.localStorage.setItem('authToken', authToken);

		const { data } = await Users.login();

		dispatch<ISignUpOrderManager>({
			type: ActionTypes.signUpOrderManager,
			payload: data
		});
	};
};
