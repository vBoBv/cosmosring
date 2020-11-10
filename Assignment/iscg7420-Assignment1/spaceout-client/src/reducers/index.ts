import { combineReducers } from 'redux';
import { reducer as reduxForm, FormStateMap } from 'redux-form';
import { IUser, IProduct } from '../actions';
import { productsReducer } from './products';
import { usersReducer } from './users';

export interface StoreState {
	form: FormStateMap;
	products: IProduct;
	users: IUser;
}

export const reducers = combineReducers<StoreState>({
	form: reduxForm,
	products: productsReducer,
	users: usersReducer
});
