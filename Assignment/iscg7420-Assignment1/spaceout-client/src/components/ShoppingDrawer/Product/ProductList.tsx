import React from 'react';
import { IProduct, deleteProduct } from '../../../actions';
import {
	List,
	ListItem,
	ListItemText,
	ListItemAvatar,
	ListItemSecondaryAction,
	Avatar,
	IconButton,
	Grid
} from '@material-ui/core';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';

interface IProductListProps {
	products: IProduct[];
}

const ProductList: React.FC<IProductListProps> = ({ products }) => {
	const dispatch = useDispatch();

	const onDelete = (id: number) => {
		dispatch(deleteProduct(id));
		window.location.reload();
	};

	const renderProductList = (productList: IProduct[]) => {
		return productList.map(({ id, name }) => {
			return (
				<ListItem key={id}>
					<ListItemAvatar>
						<Avatar>
							<ConfirmationNumberIcon />
						</Avatar>
					</ListItemAvatar>
					<Link to={`/products/${id}`} style={{ textDecoration: 'none', color: 'white' }}>
						<ListItemText primary={name} />
					</Link>
					<ListItemSecondaryAction>
						<Link to={`/products/edit/${id}`} style={{ textDecoration: 'none' }}>
							<IconButton edge='start' color='primary'>
								<EditIcon />
							</IconButton>
						</Link>

						<IconButton edge='end' color='secondary' onClick={() => onDelete(id)}>
							<DeleteIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>
			);
		});
	};

	const renderProducts = () => {
		const sessionStorageProducts = window.sessionStorage.getItem('products');
		if (sessionStorageProducts) {
			const retreivedStorageProducts: IProduct[] = JSON.parse(sessionStorageProducts);
			return renderProductList(retreivedStorageProducts);
		} else {
			return renderProductList(products);
		}
	};

	return (
		<Grid item>
			<List component='nav' aria-label='secondary mailbox folders'>
				{renderProducts()}
			</List>
		</Grid>
	);
};

export default ProductList;
