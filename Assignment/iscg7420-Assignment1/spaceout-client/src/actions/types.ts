import { IFetchProducts, IFetchProduct, ICreateProduct, IEditProduct, IDeleteProduct } from './products';
import { ILoginUser, ISignUpCustomer, ISignUpOrderManager } from './users';

export enum ActionTypes {
	fetchProducts,
	fetchProduct,
	createProduct,
	editProduct,
	deleteProduct,
	loginUser,
	signUpCustomer,
	signUpOrderManager
}

export type Action =
	| IFetchProducts
	| IFetchProduct
	| ICreateProduct
	| IEditProduct
	| IDeleteProduct
	| ILoginUser
	| ISignUpCustomer
	| ISignUpOrderManager;
