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
	};

	const renderProducts = () => {
		return products.map(({ id, name }) => {
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

	return (
		<Grid item>
			<List component='nav' aria-label='secondary mailbox folders'>
				{renderProducts()}
			</List>
		</Grid>
	);
};

export default ProductList;

// interface IDiscountListProps {
// 	discounts: IDiscount[];
// 	deleteDiscount: (id: number) => void;
// }

// class DiscountList extends Component<IDiscountListProps> {
// 	onDelete = (id: number) => {
// 		this.props.deleteDiscount(id);
// 	};

// 	renderDiscounts() {
// 		return this.props.discounts.map(({ id, discount_code }) => {
// 			return (
// 				<ListItem key={id}>
// 					<ListItemAvatar>
// 						<Avatar>
// 							<ConfirmationNumberIcon />
// 						</Avatar>
// 					</ListItemAvatar>
// 					<Link to={`/discounts/${id}`} style={{ textDecoration: 'none', color: 'white' }}>
// 						<ListItemText primary={discount_code} />
// 					</Link>
// 					<ListItemSecondaryAction>
// 						<Link to={`/discounts/edit/${id}`} style={{ textDecoration: 'none' }}>
// 							<IconButton edge='start' color='primary'>
// 								<EditIcon />
// 							</IconButton>
// 						</Link>

// 						<IconButton edge='end' color='secondary' onClick={() => this.onDelete(id)}>
// 							<DeleteIcon />
// 						</IconButton>
// 					</ListItemSecondaryAction>
// 				</ListItem>
// 			);
// 		});
// 	}

// 	render() {
// 		return (
// 			<Grid item>
// 				<List component='nav' aria-label='secondary mailbox folders'>
// 					{this.renderDiscounts()}
// 				</List>
// 			</Grid>
// 		);
// 	}
// }

// export default connect(null, { deleteDiscount })(DiscountList);
