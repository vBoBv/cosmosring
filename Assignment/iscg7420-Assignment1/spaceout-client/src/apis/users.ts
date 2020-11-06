import axios from 'axios';
import { ILoginForm } from '../actions/users';

axios.defaults.baseURL =
	process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/user/' : 'http://localhost:8000/api/user/';

const requests = {
	createToken: (url: string, formValues: ILoginForm) => axios.post<String>(url, formValues)
};

export const Users = {
	login: (formValues: ILoginForm) => requests.createToken('/token/', { ...formValues })
};
