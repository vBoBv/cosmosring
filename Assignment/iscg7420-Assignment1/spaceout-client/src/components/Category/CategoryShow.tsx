import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ICategory } from './Categories';

import pluto from '../../assets/pluto.png';

interface IRouteComponentMatchParamProps {
	id: string;
}

interface ICategoryState {
	category: ICategory;
}

class CategoryShow extends Component<RouteComponentProps<IRouteComponentMatchParamProps>, ICategoryState> {
	constructor(props: RouteComponentProps<IRouteComponentMatchParamProps>) {
		super(props);

		this.state = { category: {} as ICategory };
	}

	componentDidMount() {
		const { id } = this.props.match.params;

		fetch(`http://localhost:8000/api/ecommerce/categories/${id}/`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		})
			.then((response) => response.json())
			.then((response) => {
				this.setState({ category: response });
			})
			.catch((error) => console.error(error));
	}

	render() {
		return (
			<div>
				<h1>{this.state.category.name}</h1>
				<img src={pluto} alt={this.state.category.name} />
				<p>{this.state.category.description}</p>
			</div>
		);
	}
}

export default CategoryShow;
