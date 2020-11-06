import axios from 'axios';
import { IProduct } from '../actions/products';

const products = axios.create({
	baseURL:
		process.env.NODE_ENV === 'development'
			? 'http://localhost:8000/api/ecommerce/'
			: 'http://localhost:8000/api/ecommerce/'
});

const requests = {
	getAll: (url: string) => products.get<IProduct[]>(url),
	get: (url: string) => products.get<IProduct>(url),
	create: (url: string, formValues: any) => products.post<IProduct>(url, formValues),
	edit: (url: string, formValues: any) => products.patch<IProduct>(url, formValues),
	delete: (url: string) => products.delete<number>(url)
};

export const Products = {
	list: () => requests.getAll('/products/'),
	details: (id: number) => requests.get(`/products/${id}`),
	create: (formValues: any) => requests.create('/products/', { ...formValues }),
	edit: (id: number, formValues: any) => requests.edit(`/products/${id}`, formValues),
	delete: (id: number) => requests.delete(`/products/${id}`)
};
