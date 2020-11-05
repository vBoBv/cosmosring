import { combineReducers } from 'redux';
import { reducer as reduxForm, FormStateMap } from 'redux-form';
import { IProduct } from '../actions';
import { productsReducer } from './products';

export interface StoreState {
	form: FormStateMap;
	products: IProduct[];
}

export const reducers = combineReducers<StoreState>({
	form: reduxForm,
	products: productsReducer
});
