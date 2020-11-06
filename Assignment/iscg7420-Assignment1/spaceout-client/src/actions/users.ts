import { Users } from '../apis/users';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface ILoginForm {
	email: String;
	password: String;
}

export interface ILoginUser {
	type: ActionTypes.loginUser;
	payload: String;
}

export const loginUser = (formValue: ILoginForm) => {
	return async (dispatch: Dispatch) => {
		const { data } = await Users.login(formValue);

		dispatch<ILoginUser>({
			type: ActionTypes.loginUser,
			payload: data
		});
	};
};
