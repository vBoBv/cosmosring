import { act } from 'react-dom/test-utils';
import { IProduct, ActionTypes, Action } from '../actions';

export const productsReducer = (state: IProduct[] = [], action: Action) => {
	switch (action.type) {
		case ActionTypes.fetchProducts:
			return action.payload;
		default:
			return state;
	}
};
