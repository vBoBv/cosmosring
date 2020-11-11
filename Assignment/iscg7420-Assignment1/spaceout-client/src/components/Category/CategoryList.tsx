import React, { Component } from 'react';
import { Grid, Card, CardActionArea, CardMedia, Typography, CardContent, Button } from '@material-ui/core';
import { ICategory } from './Categories';
import { Link } from 'react-router-dom';
import history from '../history';

import pluto from '../../assets/pluto.png';

interface ICategoryListProps {
	categories: ICategory[];
}

class CategoryList extends Component<ICategoryListProps> {
	onDelete = (id: number) => {
		fetch(`http://localhost:8000/api/ecommerce/categories/${id}/`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		});
		window.location.reload();
	};

	renderCategories() {
		return this.props.categories.map(({ id, name }) => {
			return (
				<Grid item key={id}>
					<Card style={{ maxWidth: 200 }}>
						<CardActionArea>
							<CardMedia component='img' image={pluto} title='' style={{ width: '200px' }} />
							<CardContent>
								<Typography gutterBottom noWrap variant='h5' component='h2' style={{ textAlign: 'center' }}>
									{name}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
					<Grid container justify='space-around'>
						<Button color='primary' variant='outlined'>
							<Link to={`/categories/${id}`} style={{ textDecoration: 'none' }}>
								View
							</Link>
						</Button>
						<Button color='primary' variant='outlined'>
							<Link to={`/categories/edit/${id}`} style={{ textDecoration: 'none' }}>
								Edit
							</Link>
						</Button>
						<Button color='secondary' variant='outlined' onClick={() => this.onDelete(id!)}>
							Delete
						</Button>
					</Grid>
				</Grid>
			);
		});
	}

	render() {
		return <>{this.renderCategories()}</>;
	}
}

export default CategoryList;
