import axios from 'axios';
import { IProduct } from '../actions/products';

// export default axios.create({
// 	baseURL: 'http://127.0.0.1:8000/api/ecommerce/products/'
// });

axios.defaults.baseURL =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:8000/api/ecommerce/'
		: 'http://localhost:8000/api/ecommerce/';

const requests = {
	getAll: (url: string) => axios.get<IProduct[]>(url),
	get: (url: string) => axios.get<IProduct>(url),
	create: (url: string, formValues: any) => axios.post<IProduct>(url, formValues),
	edit: (url: string, formValues: any) => axios.patch<IProduct>(url, formValues),
	delete: (url: string) => axios.delete<number>(url)
};

export const Products = {
	list: () => requests.getAll('/products/'),
	details: (id: number) => requests.get(`/products/${id}`),
	create: (formValues: any) => requests.create('/products/', { ...formValues }),
	edit: (id: number, formValues: any) => requests.edit(`/products/${id}`, formValues),
	delete: (id: number) => requests.delete(`/products/${id}`)
};
