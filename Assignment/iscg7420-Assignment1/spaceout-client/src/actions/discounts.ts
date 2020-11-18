import { Discounts } from '../apis/discounts';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';
import history from '../components/history';

export interface IDiscountForm {
	discount_code: string;
	is_expired?: boolean;
}

export interface IDiscount {
	id: number;
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

export const fetchDiscounts = () => {
	return async (dispatch: Dispatch) => {
		try {
			const { data } = await Discounts.list();
			dispatch<IFetchDiscounts>({
				type: ActionTypes.fetchDiscounts,
				payload: data
			});
		} catch (error) {
			if (error.response && error.response.status === 401) {
				history.push('/authentication');
				alert('Please sign in to access Discount information!');
			}
		}
	};
};

export const fetchDiscount = (id: number) => {
	return async (dispatch: Dispatch) => {
		try {
			const { data } = await Discounts.details(id);

			dispatch<IFetchDiscount>({
				type: ActionTypes.fetchDiscount,
				payload: data
			});
		} catch (error) {
			if (error.response && error.response.status === 401) {
				history.push('/authentication');
				alert('Please sign in to access Discount information!');
			}
		}
	};
};

export const createDiscount = (formValue: IDiscountForm) => {
	return async (dispatch: Dispatch) => {
		try {
			const { data } = await Discounts.create(formValue);

			dispatch<ICreateDiscount>({
				type: ActionTypes.createDiscount,
				payload: data
			});

			history.push('/discounts');
		} catch (error) {
			if (error.response && error.response.status === 401) {
				history.push('/authentication');
				alert('Please sign in to access Discount information!');
			}
		}
	};
};

export const editDiscount = (id: number, formValue: IDiscountForm) => {
	return async (dispatch: Dispatch) => {
		const { data } = await Discounts.edit(id, formValue);

		dispatch<IEditDiscount>({
			type: ActionTypes.editDiscount,
			payload: data
		});

		history.push(`/discounts/${id}`);
	};
};

export const deleteDiscount = (id: number) => {
	return async (dispatch: Dispatch) => {
		await Discounts.delete(id);

		dispatch<IDeleteDiscount>({
			type: ActionTypes.deleteDiscount,
			payload: id
		});
	};
};
