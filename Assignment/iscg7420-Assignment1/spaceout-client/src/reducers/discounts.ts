import { IDiscount, ActionTypes, Action } from '../actions';
import _ from 'lodash';

export const discountsReducer = (state: IDiscount = {} as IDiscount, action: Action) => {
	switch (action.type) {
		case ActionTypes.fetchDiscounts:
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		default:
			return state;
	}
};
