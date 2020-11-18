import { Products } from '../apis/products';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';
import history from '../components/history';

export interface IProductForm {
	name: string;
	price: number;
	image?: string;
	description: string;
	category?: number[];
	discount?: number[];
}

export interface IProduct {
	id: number;
	name: string;
	price: number;
	image?: string;
	description: string;
	category?: number[];
	discount?: number[];
}

export interface IFetchProducts {
	type: ActionTypes.fetchProducts;
	payload: IProduct[];
}

export interface IFetchProduct {
	type: ActionTypes.fetchProduct;
	payload: IProduct;
}

export interface ICreateProduct {
	type: ActionTypes.createProduct;
	payload: IProduct;
}

export interface IEditProduct {
	type: ActionTypes.editProduct;
	payload: IProduct;
}

export interface IDeleteProduct {
	type: ActionTypes.deleteProduct;
	payload: number;
}

export const fetchProducts = () => {
	return async (dispatch: Dispatch) => {
		const { data } = await Products.list();
		sessionStorage.setItem('products', JSON.stringify(data));

		dispatch<IFetchProducts>({
			type: ActionTypes.fetchProducts,
			payload: data
		});
	};
};

export const fetchProduct = (id: number) => {
	return async (dispatch: Dispatch) => {
		const { data } = await Products.details(id);

		dispatch<IFetchProduct>({
			type: ActionTypes.fetchProduct,
			payload: data
		});
	};
};

export const createProduct = (formValues: IProductForm) => {
	return async (dispatch: Dispatch) => {
		const { data } = await Products.create(formValues);

		dispatch<ICreateProduct>({
			type: ActionTypes.createProduct,
			payload: data
		});

		history.push('/products');
	};
};

export const editProduct = (id: number, formValues: IProductForm) => {
	return async (dispatch: Dispatch) => {
		const { data } = await Products.edit(id, formValues);

		dispatch<IEditProduct>({
			type: ActionTypes.editProduct,
			payload: data
		});

		history.push(`/products/${id}`);
	};
};

export const deleteProduct = (id: number) => {
	return async (dispatch: Dispatch) => {
		await Products.delete(id);

		dispatch<IDeleteProduct>({
			type: ActionTypes.deleteProduct,
			payload: id
		});

		window.location.reload();
	};
};
