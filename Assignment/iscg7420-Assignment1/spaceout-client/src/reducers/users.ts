import { IUser, ActionTypes, Action } from '../actions';

export const usersReducer = (state: IUser = {} as IUser, action: Action) => {
	switch (action.type) {
		case ActionTypes.loginUser:
			return { ...state, payload: action.payload };
		case ActionTypes.signUpCustomer:
			return { ...state, payload: action.payload };
		case ActionTypes.signUpOrderManager:
			return { ...state, payload: action.payload };
		default:
			return state;
	}
};
