import axios from 'axios';
import { ILoginForm, IToken, IUser } from '../actions/users';

const users = axios.create({
	baseURL:
		process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/user/' : 'http://localhost:8000/api/user/'
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
	signIn: (url: string) => users.get<IUser>(url)
};

export const Users = {
	retrieveToken: (formValues: ILoginForm) => requests.createToken('/token/', { ...formValues }),
	login: () => requests.signIn('/profile/')
};
