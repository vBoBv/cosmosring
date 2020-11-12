import axios from 'axios';
import { IDiscount } from '../actions/discounts';

const discounts = axios.create({
	baseURL:
		process.env.NODE_ENV === 'development'
			? 'http://localhost:8000/api/ecommerce/'
			: 'http://localhost:8000/api/ecommerce/'
});

const requests = {
	getAll: (url: string) => discounts.get<IDiscount[]>(url),
	get: (url: string) => discounts.get<IDiscount>(url),
	create: (url: string, formValues: IDiscount) => discounts.post<IDiscount>(url, formValues),
	edit: (url: string, formValues: IDiscount) => discounts.patch<IDiscount>(url, formValues),
	delete: (url: string) => discounts.delete<number>(url)
};

export const Discounts = {
	list: () => requests.getAll('/discounts/'),
	details: (id: number) => requests.get(`/discounts/${id}/`),
	create: (formValues: IDiscount) => requests.create('/discounts/', { ...formValues }),
	edit: (id: number, formValues: IDiscount) => requests.edit(`/discounts/${id}/`, formValues),
	delete: (id: number) => requests.delete(`/discounts/${id}/`)
};
