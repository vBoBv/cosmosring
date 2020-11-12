import { IDiscount, ActionTypes, Action } from '../actions';
import _ from 'lodash';

export const discountsReducer = (state: IDiscount = {} as IDiscount, action: Action) => {
	switch (action.type) {
		case ActionTypes.fetchDiscounts:
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		case ActionTypes.fetchDiscount:
			return { ...state, [action.payload.id]: action.payload };
		case ActionTypes.createDiscount:
			return { ...state, [action.payload.id]: action.payload };
		default:
			return state;
	}
};
