import { IFetchProducts, IFetchProduct, ICreateProduct, IEditProduct, IDeleteProduct } from './products';
import { ILoginUser, ISignUpCustomer } from './users';

export enum ActionTypes {
	fetchProducts,
	fetchProduct,
	createProduct,
	editProduct,
	deleteProduct,
	loginUser,
	signUpCustomer
}

export type Action =
	| IFetchProducts
	| IFetchProduct
	| ICreateProduct
	| IEditProduct
	| IDeleteProduct
	| ILoginUser
	| ISignUpCustomer;
