import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ICategory } from './Categories';
import { API_URL } from './apiUrl';
import { Grid } from '@material-ui/core';

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

	render() {
		return (
			// <div>
			// 	<h1>{this.state.category.name}</h1>
			// 	<img src={pluto} alt={this.state.category.name} />
			// 	<p>{this.state.category.description}</p>
			// </div>
			<Grid
				container
				alignItems='center'
				direction='column'
				style={{ padding: '5rem', backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
				<Grid item>
					<img src={pluto} alt={this.state.category.name} />
				</Grid>

				<Grid item>
					<h1>{this.state.category.name}</h1>
				</Grid>

				<Grid item style={{ textAlign: 'justify' }}>
					<h2>{this.state.category.description}</h2>
				</Grid>

				{/* <Grid item>
						{product.price}
						<h5>Category: {product.category}</h5>
					</Grid> */}
			</Grid>
		);
	}
}

export default CategoryShow;
