export const API_URL =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:8000/api/ecommerce/categories/'
		: 'http://ec2-3-25-136-35.ap-southeast-2.compute.amazonaws.com/api/ecommerce/categories/';
