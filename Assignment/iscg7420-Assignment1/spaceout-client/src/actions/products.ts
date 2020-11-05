import { Products } from '../apis/products';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface IProduct {
	id: number;
	name: string;
	price: number;
	image?: string;
	description: string;
	category: number[];
	discount: string[];
}

export interface IFetchProducts {
	type: ActionTypes.fetchProducts;
	payload: IProduct[];
}

export const fetchProducts = () => {
	return async (dispatch: Dispatch) => {
		const { data } = await Products.list();

		dispatch<IFetchProducts>({
			type: ActionTypes.fetchProducts,
			payload: data
		});
	};
};
