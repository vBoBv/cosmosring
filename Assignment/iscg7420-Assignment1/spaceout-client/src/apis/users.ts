import axios from 'axios';
import { ILoginForm, IToken, IUser, ICustomer, IOrderManager } from '../actions/users';

const users = axios.create({
	baseURL:
		process.env.NODE_ENV === 'development'
			? 'http://localhost:8000/api/user/'
			: 'http://ec2-3-25-136-35.ap-southeast-2.compute.amazonaws.com/api/user/'
});

users.interceptors.request.use(
	(config) => {
		const authToken = window.localStorage.getItem('authToken');
		if (authToken) config.headers.Authorization = `Token ${authToken}`;
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

const requests = {
	createToken: (url: string, formValues: ILoginForm) => users.post<IToken>(url, formValues),
	signIn: (url: string) => users.get<IUser>(url),
	signUpCustomer: (url: string, formValues: ICustomer) => users.post<ICustomer>(url, { ...formValues }),
	signUpOrderManager: (url: string, formValues: IOrderManager) => users.post<IOrderManager>(url, { ...formValues })
};

export const Users = {
	retrieveToken: (formValues: ILoginForm) => requests.createToken('/token/', { ...formValues }),
	login: () => requests.signIn('/profile/'),
	signUpCustomer: (formValues: ICustomer) => requests.signUpCustomer('/create_customer/', { ...formValues }),
	signUpOrderManager: (formValues: IOrderManager) =>
		requests.signUpOrderManager('/create_order_manager/', { ...formValues })
};
