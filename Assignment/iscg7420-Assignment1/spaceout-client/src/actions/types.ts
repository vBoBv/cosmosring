import { IFetchProducts, IFetchProduct, ICreateProduct, IEditProduct, IDeleteProduct } from './products';
import { ILoginUser } from './users';

export enum ActionTypes {
	fetchProducts,
	fetchProduct,
	createProduct,
	editProduct,
	deleteProduct,
	loginUser
}

export type Action = IFetchProducts | IFetchProduct | ICreateProduct | IEditProduct | IDeleteProduct | ILoginUser;
