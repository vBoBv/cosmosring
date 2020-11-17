import axios from 'axios';
import { IDiscount, IDiscountForm } from '../actions/discounts';

const discounts = axios.create({
	baseURL:
		process.env.NODE_ENV === 'development'
			? 'http://localhost:8000/api/ecommerce/'
			: 'http://ec2-3-25-136-35.ap-southeast-2.compute.amazonaws.com/api/ecommerce/'
});

discounts.interceptors.request.use(
	(config) => {
		const authToken = window.localStorage.getItem('authToken');
		if (authToken) config.headers.Authorization = `Token ${authToken}`;
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

const requests = {
	getAll: (url: string) => discounts.get<IDiscount[]>(url),
	get: (url: string) => discounts.get<IDiscount>(url),
	create: (url: string, formValues: IDiscountForm) => discounts.post<IDiscount>(url, formValues),
	edit: (url: string, formValues: IDiscountForm) => discounts.patch<IDiscount>(url, formValues),
	delete: (url: string) => discounts.delete<number>(url)
};

export const Discounts = {
	list: () => requests.getAll('/discounts/'),
	details: (id: number) => requests.get(`/discounts/${id}/`),
	create: (formValues: IDiscountForm) => requests.create('/discounts/', { ...formValues }),
	edit: (id: number, formValues: IDiscountForm) => requests.edit(`/discounts/${id}/`, formValues),
	delete: (id: number) => requests.delete(`/discounts/${id}/`)
};
