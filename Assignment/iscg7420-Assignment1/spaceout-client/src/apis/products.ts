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
	getAll: (url: string) => axios.get<IProduct[]>(url)
};

export const Products = {
	list: () => requests.getAll('/products')
};
