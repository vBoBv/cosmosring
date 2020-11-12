import React, { Component } from 'react';
import { IDiscount } from '../../actions';
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
import DeleteIcon from '@material-ui/icons/Delete';

interface IDiscountListProps {
	discounts: IDiscount[];
}

class DiscountList extends Component<IDiscountListProps> {
	renderDiscounts() {
		return this.props.discounts.map(({ id, discount_code }) => {
			return (
				<ListItem key={id}>
					<ListItemAvatar>
						<Avatar>
							<ConfirmationNumberIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary={discount_code} />
					<ListItemSecondaryAction>
						<IconButton edge='end' aria-label='delete'>
							<DeleteIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>
			);
		});
	}

	render() {
		return (
			<Grid item>
				<List component='nav' aria-label='secondary mailbox folders'>
					{this.renderDiscounts()}
				</List>
			</Grid>
		);
	}
}

export default DiscountList;
