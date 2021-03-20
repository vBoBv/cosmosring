import React, { Component } from 'react';
import { Grid, Card, CardActionArea, CardMedia, Typography, CardContent, Button } from '@material-ui/core';
import { ICategory } from './Categories';
import { Link } from 'react-router-dom';
import { API_URL } from './apiUrl';
import getRandomImage from '../../utils/getRandomImage';

interface ICategoryListProps {
	categories: ICategory[];
}

class CategoryList extends Component<ICategoryListProps> {
	onDelete = (id: number) => {
		fetch(`${API_URL}${id}/`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		});
		window.location.reload();
	};

	renderCategories() {
		return this.props.categories.map(({ id, name }) => {
			return (
				<Grid item key={id}>
					<Card style={{ backgroundColor: 'black' }}>
						<CardActionArea>
							<CardMedia component='img' image={getRandomImage()} title='' style={{ width: '200px' }} />
							<CardContent>
								<Typography
									gutterBottom
									noWrap
									variant='h5'
									component='h2'
									style={{ textAlign: 'center', color: 'white' }}>
									{name}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>

					<Grid container justify='space-around'>
						<Button color='primary' variant='text'>
							<Link to={`/categories/${id}`} style={{ textDecoration: 'none', color: 'white' }}>
								View
							</Link>
						</Button>
						<Button color='primary' variant='text'>
							<Link to={`/categories/edit/${id}`} style={{ textDecoration: 'none', color: 'white' }}>
								Edit
							</Link>
						</Button>
						<Button
							color='secondary'
							variant='text'
							onClick={() => this.onDelete(id!)}
							style={{ textDecoration: 'none', color: 'white' }}>
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
