import React, { Component } from 'react';
import CategoryForm from './CategoryForm';
import history from '../history';
import { API_URL } from './apiUrl';

class CategoryCreate extends Component {
	onSubmit = (formValues: any) => {
		fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formValues)
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				history.push('/categories/');
			})
			.catch((error) => console.error(error));
	};

	render() {
		return (
			<div style={{ backgroundColor: 'black', minHeight: '100vh', padding: '5rem' }}>
				<h1>Create Category</h1>
				<CategoryForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default CategoryCreate;
