import { ILoginUser, ISignUpCustomer, ISignUpOrderManager } from './users';
import { IFetchProducts, IFetchProduct, ICreateProduct, IEditProduct, IDeleteProduct } from './products';
import { IFetchDiscounts, IFetchDiscount, ICreateDiscount, IEditDiscount, IDeleteDiscount } from './discounts';

export enum ActionTypes {
	fetchProducts,
	fetchProduct,
	createProduct,
	editProduct,
	deleteProduct,
	loginUser,
	signUpCustomer,
	signUpOrderManager,
	fetchDiscounts,
	fetchDiscount,
	createDiscount,
	editDiscount,
	deleteDiscount
}

export type Action =
	| IFetchProducts
	| IFetchProduct
	| ICreateProduct
	| IEditProduct
	| IDeleteProduct
	| ILoginUser
	| ISignUpCustomer
	| ISignUpOrderManager
	| IFetchDiscounts
	| IFetchDiscount
	| ICreateDiscount
	| IEditDiscount
	| IDeleteDiscount;
