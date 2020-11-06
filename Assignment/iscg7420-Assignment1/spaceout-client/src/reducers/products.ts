import { IProduct, ActionTypes, Action } from '../actions';
import _ from 'lodash';

// Object-based approach
export const productsReducer = (state: IProduct = {} as IProduct, action: Action) => {
	switch (action.type) {
		case ActionTypes.fetchProducts:
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		case ActionTypes.fetchProduct:
			return { ...state, [action.payload.id]: action.payload };
		case ActionTypes.createProduct:
			return { ...state, [action.payload.id]: action.payload };
		case ActionTypes.editProduct:
			return { ...state, [action.payload.id]: action.payload };
		case ActionTypes.deleteProduct:
			return _.omit(state, action.payload);
		default:
			return state;
	}
};

// Array-based approach
// export const productsReducer = (state: IProduct[] = [], action: Action) => {
// 	switch (action.type) {
// 		case ActionTypes.fetchProducts:
// 			return action.payload;
// 		case ActionTypes.fetchProduct:
// 			return action.payload;
// 		case ActionTypes.editProduct:
// 			return state.map((product) => {
// 				if (product.id === action.payload.id) {
// 					return action.payload;
// 				} else {
// 					return product;
// 				}
// 			});
// 		default:
// 			return state;
// 	}
// };
