import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';
import { API_URL } from './apiUrl';

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
		fetch(API_URL, {
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
			<Grid
				container
				direction='row'
				justify='space-evenly'
				alignContent='flex-start'
				style={{ paddingTop: '5rem', backgroundColor: 'black', minHeight: '100vh' }}>
				<Grid item container justify='center' style={{ marginBottom: '5rem' }}>
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
