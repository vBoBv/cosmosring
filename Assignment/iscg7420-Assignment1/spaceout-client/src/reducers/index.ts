import { combineReducers } from 'redux';
import { reducer as reduxForm, FormStateMap } from 'redux-form';
import { IUser, IProduct, IDiscount } from '../actions';
import { productsReducer } from './products';
import { usersReducer } from './users';
import { discountsReducer } from './discounts';

export interface StoreState {
	form: FormStateMap;
	users: IUser;
	products: IProduct;
	discounts: IDiscount;
}

export const reducers = combineReducers<StoreState>({
	form: reduxForm,
	users: usersReducer,
	products: productsReducer,
	discounts: discountsReducer
});
