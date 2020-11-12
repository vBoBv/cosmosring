import { Discounts } from '../apis/discounts';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';
import history from '../components/history';

export interface IDiscount {
	discount_code: string;
	is_expired: boolean;
}

export interface IFetchDiscounts {
	type: ActionTypes.fetchDiscounts;
	payload: IDiscount[];
}

export interface IFetchDiscount {
	type: ActionTypes.fetchDiscount;
	payload: IDiscount;
}

export interface ICreateDiscount {
	type: ActionTypes.createDiscount;
	payload: IDiscount;
}

export interface IEditDiscount {
	type: ActionTypes.editDiscount;
	payload: IDiscount;
}

export interface IDeleteDiscount {
	type: ActionTypes.deleteDiscount;
	payload: number;
}
