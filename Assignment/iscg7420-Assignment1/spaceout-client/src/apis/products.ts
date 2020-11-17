import axios from 'axios';
import { IProductForm, IProduct } from '../actions/products';

const products = axios.create({
	baseURL:
		process.env.NODE_ENV === 'development'
			? 'http://localhost:8000/api/ecommerce/'
			: 'http://ec2-3-25-136-35.ap-southeast-2.compute.amazonaws.com/api/ecommerce/'
});

const requests = {
	getAll: (url: string) => products.get<IProduct[]>(url),
	get: (url: string) => products.get<IProduct>(url),
	create: (url: string, formValues: IProductForm) => products.post<IProduct>(url, formValues),
	edit: (url: string, formValues: IProductForm) => products.patch<IProduct>(url, formValues),
	delete: (url: string) => products.delete<number>(url)
};

export const Products = {
	list: () => requests.getAll('/products/'),
	details: (id: number) => requests.get(`/products/${id}/`),
	create: (formValues: IProductForm) => requests.create('/products/', { ...formValues }),
	edit: (id: number, formValues: IProductForm) => requests.edit(`/products/${id}/`, formValues),
	delete: (id: number) => requests.delete(`/products/${id}/`)
};
