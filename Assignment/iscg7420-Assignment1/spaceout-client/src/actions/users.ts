import { Users } from '../apis/users';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';
import history from '../components/history';

export interface ILoginForm {
	email: string;
	password: string;
}

export interface IToken {
	token: string;
}

export interface IUser {
	email: string;
	username: string;
}

export interface ILoginUser {
	type: ActionTypes.loginUser;
	payload: IUser;
}

export const loginUser = (formValue: ILoginForm) => {
	return async (dispatch: Dispatch) => {
		const { data: responseToken } = await Users.retrieveToken(formValue);
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
