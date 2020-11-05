import { IFetchProducts, IFetchProduct, ICreateProduct, IEditProduct, IDeleteProduct } from './products';

export enum ActionTypes {
	fetchProducts,
	fetchProduct,
	createProduct,
	editProduct,
	deleteProduct
}

export type Action = IFetchProducts | IFetchProduct | ICreateProduct | IEditProduct | IDeleteProduct;
