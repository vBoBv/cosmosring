import { ILoginForm, ActionTypes, Action } from '../actions';
import _ from 'lodash';

export const usersReducer = (state: ILoginForm = {} as ILoginForm, action: Action) => {
	switch (action.type) {
		case ActionTypes.loginUser:
			return { ...state, payload: action.payload };
		default:
			return state;
	}
};
