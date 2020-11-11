import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';

export interface ICategory {
	id?: number;
	name: string;
	description: string;
	image?: string;
}

interface ICategoriesProps {}

interface ICategoriesState {
	categories: ICategory[];
}

class Categories extends Component<ICategoriesProps, ICategoriesState> {
	constructor(props: ICategoriesProps) {
		super(props);

		this.state = { categories: [] };
	}

	componentDidMount() {
		fetch('http://localhost:8000/api/ecommerce/categories/', {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		})
			.then((response) => response.json())
			.then((response) => {
				this.setState({ categories: response });
			})
			.catch((error) => console.error(error));
	}

	render() {
		return (
			<Grid container direction='row' justify='space-evenly' style={{ paddingTop: '5rem', backgroundColor: 'grey' }}>
				<Grid item container justify='center'>
					<Link to='/categories/new' style={{ textDecoration: 'none' }}>
						<Button variant='contained' color='secondary'>
							Create a new category
						</Button>
					</Link>
				</Grid>
				<Grid item container direction='row' justify='space-evenly'>
					<CategoryList categories={this.state.categories} />
				</Grid>
			</Grid>
		);
	}
}

export default Categories;
