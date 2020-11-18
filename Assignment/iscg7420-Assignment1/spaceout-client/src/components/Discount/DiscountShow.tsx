import React, { Component } from 'react';
import { IDiscount } from '../../actions';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchDiscount } from '../../actions/discounts';
import { StoreState } from '../../reducers';
import { Typography, Grid } from '@material-ui/core';

interface IDiscountShowProps {
	discounts: IDiscount[];
	fetchDiscount: (id: number) => void;
}

interface IRouteComponentMatchParamProps {
	id: string;
}

class DiscountShow extends Component<RouteComponentProps<IRouteComponentMatchParamProps> & IDiscountShowProps> {
	componentDidMount() {
		const { id } = this.props.match.params;

		this.props.fetchDiscount(parseInt(id));
	}

	renderDiscounts() {
		const { id } = this.props.match.params;
		const discount = this.props.discounts.filter((discount) => discount.id === parseInt(id))[0];

		if (discount) {
			return (
				<Grid item key={discount.id}>
					<Typography>Discount code: {discount.discount_code}</Typography>
					<Typography>Is expired: {discount.is_expired ? 'Yes' : 'No'}</Typography>
				</Grid>
			);
		}
	}

	render() {
		return (
			<Grid container style={{ paddingTop: '5rem', backgroundColor: 'grey' }}>
				{this.renderDiscounts()}
			</Grid>
		);
	}
}

const mapStateToProps = ({ discounts }: StoreState): { discounts: IDiscount[] } => {
	return {
		discounts: Object.values(discounts)
	};
};

export default connect(mapStateToProps, { fetchDiscount })(DiscountShow);
