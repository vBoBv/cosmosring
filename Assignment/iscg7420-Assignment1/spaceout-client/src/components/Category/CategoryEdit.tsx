import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ICategory } from './Categories';
import CategoryForm from './CategoryForm';
import _ from 'lodash';
import history from '../history';
import { API_URL } from './apiUrl';

interface IRouteComponentMatchParamProps {
	id: string;
}

interface ICategoryState {
	category: ICategory;
}

class CategoryEdit extends Component<RouteComponentProps<IRouteComponentMatchParamProps>, ICategoryState> {
	constructor(props: RouteComponentProps<IRouteComponentMatchParamProps>) {
		super(props);

		this.state = { category: {} as ICategory };
	}

	componentDidMount() {
		const { id } = this.props.match.params;

		fetch(`${API_URL}${id}/`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		})
			.then((response) => response.json())
			.then((response) => {
				this.setState({ category: response });
			})
			.catch((error) => console.error(error));
	}

	onSubmit = (formValues: any) => {
		const { id } = this.props.match.params;

		fetch(`${API_URL}${id}/`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formValues)
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				history.push(`/categories/${id}/`);
			})
			.catch((error) => console.error(error));
	};

	render() {
		return (
			<div style={{ backgroundColor: 'black', minHeight: '100vh', padding: '5rem' }}>
				<h1 style={{ color: 'white' }}>Edit Category</h1>
				<CategoryForm initialValues={_.pick(this.state.category, 'name', 'description')} onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default CategoryEdit;
